import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../../config/firebase";
import { Analysis, Exam, Patient } from "../../interfaces";
import PersonalInfoForm, { PersonalInfoFormData } from "./Patient/PersonalInfoForm";
import DrugAllergiesForm, { DrugAllergyFormData } from "./Patient/DrugAllergiesForm";
import ChronicDiseasesForm from "./Patient/ChronicDiseasesForm";
import PatientSummary from "./Patient/PatientSummary";
import ExamForm from "./Patient/ExamForm";
import { FaCheck, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { toast } from "react-hot-toast";
import { Toaster } from 'react-hot-toast';
import AnalysisForm from "./Patient/analysisForm";
import AideAuDiagnostic from "./Patient/AideAuDiagnostic";

const stepComponents = [
    { name: "Informations Personnelles", component: PersonalInfoForm },
    { name: "Allergies Médicamenteuses", component: DrugAllergiesForm },
    { name: "Maladies Chroniques", component: ChronicDiseasesForm },
    { name: "Examens", component: ExamForm },
    { name: "Analyses", component: AnalysisForm },
    { name: "Aide au diagnostic", component: AideAuDiagnostic },
    { name: "Récapitulatif", component: PatientSummary }
];

interface PatientUpdateContainerProps {
    patientId: string;
}

const PatientUpdateContainer: React.FC<PatientUpdateContainerProps> = ({ patientId }) => {
    const router = useRouter();
    const [currentStep, setCurrentStep] = useState(0);
    const [loading, setLoading] = useState(true);
    const [patient, setPatient] = useState<Patient | null>(null);

    useEffect(() => {
        const fetchPatientData = async () => {
            const docRef = doc(db, "Patient", patientId);
            const docSnap = await getDoc(docRef);
    
            if (docSnap.exists()) {
                const patientData = docSnap.data() as Patient;
                
                // Convert Firestore timestamps to Date objects
                const examsWithDates = patientData.exams.map(exam => ({
                    ...exam,
                    createdAt: exam.createdAt.toDate()
                }));
    
                const analysisWithDates = patientData.analysis.map(an => ({
                    ...an,
                    createdAt: an.createdAt.toDate()
                }));
    
                setPatient({
                    ...patientData,
                    exams: examsWithDates,
                    analysis: analysisWithDates
                });
            } else {
                console.log("No such document!");
            }
            setLoading(false);
        };
    
        fetchPatientData();
    }, [patientId]);

    const notify = (text: string) => {
        toast.success(text);
    };

    const [personalInfo, setPersonalInfo] = useState<PersonalInfoFormData>({
        firstName: "",
        lastName: "",
        dateOfBirth: "",
        placeOfBirth: "",
        address: "",
        sex: "",
        phoneNumber: "",
        socialSecurityNumber: "",
    });

    const [drugAllergies, setDrugAllergies] = useState<string[]>([]);
    const [medicalInfo, setMedicalInfo] = useState<string[]>([]);
    const [chronicDiseases, setChronicDiseases] = useState<string[]>([]);
    const [exams, setExams] = useState<Exam[]>([]);
    const [analysis, setAnalysis] = useState<Analysis[]>([]);
    const [aideAuDiagnostic, setAideAuDiagnostic] = useState<string>("");

    useEffect(() => {
        if (patient) {
            setPersonalInfo({
                firstName: patient.personalInfo.firstName,
                lastName: patient.personalInfo.lastName,
                dateOfBirth: patient.personalInfo.dateOfBirth,
                placeOfBirth: patient.personalInfo.placeOfBirth,
                address: patient.personalInfo.address,
                sex: patient.personalInfo.sex,
                phoneNumber: patient.personalInfo.phoneNumber,
                socialSecurityNumber: patient.personalInfo.socialSecurityNumber,
            });
            setDrugAllergies(patient.drugAllergies || []);
            setChronicDiseases(patient.chronicDiseases || []);
            setMedicalInfo(patient.medicalInfo || []);
            setExams(patient.exams || []);
            setAnalysis(patient.analysis || []);
            setAideAuDiagnostic(patient.aideAuDiagnostic || "");
        }
    }, [patient]);

    const handlePersonalInfoSubmit = (data: PersonalInfoFormData) => {
        setPersonalInfo(data);
        goNext();
    };

    const handleDrugAllergiesSubmit = (allergies: DrugAllergyFormData) => {
        setDrugAllergies(allergies);
        goNext();
    };

    const handleChronicDiseasesSubmit = (diseases: string[]) => {
        setChronicDiseases(diseases);
        goNext();
    };

    const handleExamsSubmit = (exams: Exam[]) => {
        setExams(exams);
        goNext();
    };

    const handleAnalysisSubmit = (analysis: Analysis[]) => {
        setAnalysis(analysis);
        goNext();
    };

    const handleAideDiagnosticSubmit = (note: string) => {
        setAideAuDiagnostic(note);
        goNext();
    };

    const goNext = () => {
        setCurrentStep((prev) => (prev < stepComponents.length - 1 ? prev + 1 : prev));
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
            const docRef = doc(db, 'Patient', patientId); // Use the existing patient ID
            await updateDoc(docRef, patientData); // Update the document
            console.log('Document updated with ID: ', patientId);
            notify("Patient data modified successfully.");
            router.push("/patients");
        } catch (e) {
            console.error('Error updating document: ', e);
        }
    };

    return (
        <div style={{ display: 'flex' }}>
            <Toaster />
            <div className="menu" style={{ width: '200px', borderRight: '1px solid #ccc', padding: '10px', height: '100%' }}>
                {stepComponents.map((item, index) => (
                    <div key={index}
                         className={`menu-item ${index === currentStep ? 'active' : ''}`}
                         onClick={() => setCurrentStep(index)}
                         style={{ padding: '10px', cursor: 'pointer', color: index === currentStep ? 'blue' : 'black' }}
                    >
                        {item.name}
                    </div>
                ))}
            </div>
            <div className="form-container" style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: '20px' }}>
                {loading ? <p>Loading...</p> : (
                    <>
                        {currentStep === 0 && (
                            <PersonalInfoForm initialData={personalInfo} onSubmit={handlePersonalInfoSubmit} />
                        )}
                        {currentStep === 1 && (
                            <DrugAllergiesForm initialData={drugAllergies} onSubmit={handleDrugAllergiesSubmit} />
                        )}
                        {currentStep === 2 && (
                            <ChronicDiseasesForm initialData={chronicDiseases} onSubmit={handleChronicDiseasesSubmit} />
                        )}
                        {currentStep === 3 && (
                            <ExamForm initialData={exams} onSubmit={handleExamsSubmit} />
                        )}
                        {currentStep === 4 && (
                            <AnalysisForm initialData={analysis} onSubmit={handleAnalysisSubmit} />
                        )}
                        {currentStep === 5 && (
                            <AideAuDiagnostic initialData={aideAuDiagnostic} onSubmit={handleAideDiagnosticSubmit}   />
                        )}
                        {currentStep === 6 && (
                            <PatientSummary
                                personalInfo={personalInfo}
                                drugAllergies={drugAllergies}
                                chronicDiseases={chronicDiseases}
                                onSubmit={handleFinalSubmit}
                                medicalInfo={patient.medicalInfo}
                                exams={exams}
                                analysis={analysis}
                                aideAuDiagnostic={aideAuDiagnostic}
                            />
                        )}
                    </>
                )}
                <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-around', padding: '20px 0' }}>
                    {currentStep > 0 && (
                        <button onClick={() => setCurrentStep(currentStep - 1)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: "black" }}>
                            <FaChevronLeft /> Avant
                        </button>
                    )}
                    {currentStep < stepComponents.length - 1 && (
                        <button onClick={() => setCurrentStep(currentStep + 1)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: "black" }}>
                            Après <FaChevronRight />
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default PatientUpdateContainer;
