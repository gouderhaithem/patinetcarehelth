import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { collection, addDoc, updateDoc, doc } from 'firebase/firestore';
import { db } from '../../config/firebase'; // Adjust the import path as needed
import PersonalInfoForm, { PersonalInfoFormData } from './Patient/PersonalInfoForm';
import DrugAllergiesForm from './Patient/DrugAllergiesForm';
import ChronicDiseasesForm from './Patient/ChronicDiseasesForm';
import PatientSummary from './Patient/PatientSummary';
import ExamForm from './Patient/ExamForm';
import MedicalInfoForm, { MedicalInfoFormData } from './Patient/MedicalInfoForm';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { Analysis, Exam } from '../../interfaces';
import { toast } from "react-hot-toast";
import QRCode from 'qrcode.react';
import Modal from 'react-modal';
import AnalysisForm from './Patient/analysisForm';
import  { Toaster } from 'react-hot-toast';
import AideAuDiagnostic from './Patient/AideAuDiagnostic';

const stepComponents = [
    { name: 'Informations Personnelles', component: PersonalInfoForm },
    { name: 'Informations Médicales', component: MedicalInfoForm },
    { name: 'Allergies Médicamenteuses', component: DrugAllergiesForm },
    { name: 'Maladies Chroniques', component: ChronicDiseasesForm },
    { name: 'Examens', component: ExamForm },
    { name: 'Analyses', component: AnalysisForm },
    {name: "Aide au diagnostic" , component: AideAuDiagnostic},
    { name: 'Récapitulatif', component: PatientSummary },
];

const PatientCreationContainer = () => {
    const router = useRouter();
    const [currentStep, setCurrentStep] = useState(0);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [patientId, setPatientId] = useState('');

    const initialPersonalInfo: PersonalInfoFormData = {
        firstName: '',
        lastName: '',
        dateOfBirth: '',
        placeOfBirth: '',
        address: '',
        sex: 'M',
        phoneNumber: '',
        socialSecurityNumber: '',
    };

    const initialMedicalInfo: MedicalInfoFormData = {
        weight: 0,
        height: 0,
        lifestyle: [],
        riskFactors: [],
        bloodType: '',
        bloodSugarLevel: 0,
        bloodPressure: '',
    };

    const [personalInfo, setPersonalInfo] = useState<PersonalInfoFormData>(initialPersonalInfo);
    const [medicalInfo, setMedicalInfo] = useState<MedicalInfoFormData>(initialMedicalInfo);
    const [drugAllergies, setDrugAllergies] = useState<string[]>([]);
    const [chronicDiseases, setChronicDiseases] = useState<string[]>([]);
    const [exams, setExams] = useState<Exam[]>([]);
    const [analysis, setAnalysis] = useState<Analysis[]>([]);
    const [aideAuDiagnostic, setAideAuDiagnostic] = useState<string>("");

    const handlePersonalInfoSubmit = (data: PersonalInfoFormData) => {
        setPersonalInfo(data);
        goNext();
    };

    const handleMedicalInfoSubmit = (data: MedicalInfoFormData) => {
        setMedicalInfo(data);
        goNext();
    };

    const handleDrugAllergiesSubmit = (data: string[]) => {
        setDrugAllergies(data);
        goNext();
    };

    const handleChronicDiseasesSubmit = (data: string[]) => {
        setChronicDiseases(data);
        goNext();
    };

    const handleExamsSubmit = (data: Exam[]) => {
        setExams(data);
        goNext();
    };

    const handleAnalysisSubmit = (data: Analysis[]) => {
        setAnalysis(data);
        goNext();
    };

    const handleAideDiagnostic = (data: string) => {
        setAideAuDiagnostic(data);
        goNext();
    };
    



    const notify = (text) => {
        toast.success(text);
    };

    const handleFinalSubmit = async () => {
        const patientData = {
            personalInfo,
            medicalInfo,
            drugAllergies,
            chronicDiseases,
            exams,
            analysis,
             aideAuDiagnostic,
        };

        try {
            const docRef = await addDoc(collection(db, 'Patient'), patientData);
            console.log('Document written with ID: ', docRef.id);
            setPatientId(docRef.id);
            setModalIsOpen(true);
            notify("Patient added successfully. You can find it in the patient list.");
        } catch (e) {
            console.error('Error adding document: ', e);
        }
    };

    const goNext = () => {
        setCurrentStep(prev => (prev < stepComponents.length - 1 ? prev + 1 : prev));
    };

    const goPrevious = () => {
        setCurrentStep(prev => (prev > 0 ? prev - 1 : prev));
    };

    const renderCurrentForm = () => {
        switch (currentStep) {
            case 0:
                return <PersonalInfoForm initialData={personalInfo} onSubmit={handlePersonalInfoSubmit} />;
            case 1:
                return <MedicalInfoForm initialData={medicalInfo} onSubmit={handleMedicalInfoSubmit} />;
            case 2:
                return <DrugAllergiesForm initialData={drugAllergies} onSubmit={handleDrugAllergiesSubmit} />;
            case 3:
                return <ChronicDiseasesForm initialData={chronicDiseases} onSubmit={handleChronicDiseasesSubmit} />;
            case 4:
                return <ExamForm initialData={exams} onSubmit={handleExamsSubmit} />;
            case 5:
                return <AnalysisForm initialData={analysis} onSubmit={handleAnalysisSubmit} />;
            case 6:
                return <AideAuDiagnostic initialData={aideAuDiagnostic} onSubmit={handleAideDiagnostic} />;
            case 7:
                return (
                    <PatientSummary
                        personalInfo={personalInfo}
                        medicalInfo={medicalInfo}
                        drugAllergies={drugAllergies}
                        chronicDiseases={chronicDiseases}
                        exams={exams}
                        analysis={analysis}
                        aideAuDiagnostic={aideAuDiagnostic}
                        onSubmit={handleFinalSubmit}
                    />
                );
            default:
                return null;
        }
    };
    
    const downloadQRCode = () => {
        const canvas = document.getElementById('qrCode') as HTMLCanvasElement;
        const pngUrl = canvas
            .toDataURL('image/png')
            .replace('image/png', 'image/octet-stream');
        const downloadLink = document.createElement('a');
        downloadLink.href = pngUrl;
        downloadLink.download = `patient-${patientId}-qrcode.png`;
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
        notify("The QR Code downloaded successfully");
        router.push('/patients');
    };

    return (
        <div style={{ display: 'flex' }}>
            <Toaster />
            <div className="menu" style={{ width: '200px', borderRight: '1px solid #ccc', padding: '10px', height: '100%' }}>
                {stepComponents.map((item, index) => (
                    <div
                        key={index}
                        className={`menu-item ${index === currentStep ? 'active' : ''}`}
                        onClick={() => setCurrentStep(index)}
                        style={{ padding: '10px', cursor: 'pointer', color: index === currentStep ? 'blue' : 'black' }}
                    >
                        {item.name}
                    </div>
                ))}
            </div>
            <div className="form-container" style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: '20px' }}>
                {renderCurrentForm()}
                <div className="navigation-buttons" style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-around', padding: '20px 0' }}>
                    {currentStep > 0 && (
                        <button onClick={goPrevious} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'black' }}>
                            <FaChevronLeft /> Avant
                        </button>
                    )}
                    {currentStep < stepComponents.length - 1 && (
                        <button onClick={goNext} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'black' }}>
                            Après <FaChevronRight />
                        </button>
                    )}
                </div>
            </div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={() => setModalIsOpen(false)}
                contentLabel="Patient QR Code"
                style={{
                    content: {
                        top: '50%',
                        left: '50%',
                        right: 'auto',
                        bottom: 'auto',
                        marginRight: '-50%',
                        transform: 'translate(-50%, -50%)',
                    },
                }}
            >
                <h2>Patient QR Code</h2>
                <QRCode
                    id="qrCode"
                    value={patientId}
                    size={256}
                    level="H"
                    includeMargin={true}
                />
                <button onClick={downloadQRCode} style={{ marginTop: '20px' }}>Download QR Code</button>
                <button onClick={() => setModalIsOpen(false)} style={{ marginTop: '20px' }}>Close</button>
            </Modal>
        </div>
    );
};

export default PatientCreationContainer;
