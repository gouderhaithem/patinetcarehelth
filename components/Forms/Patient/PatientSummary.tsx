import React, { useState } from 'react';
import { PersonalInfoFormData } from './PersonalInfoForm';
import { MedicalInfoFormData } from './MedicalInfoForm';
import { Exam, Analysis } from '../../../interfaces';

type PatientSummaryProps = {
    personalInfo: PersonalInfoFormData;
    medicalInfo: MedicalInfoFormData;
    drugAllergies: string[];
    chronicDiseases: string[];
    exams: Exam[];
    analysis: Analysis[];
    aideAuDiagnostic: string;
    onSubmit: () => void;
};

const PatientSummary: React.FC<PatientSummaryProps> = ({
    personalInfo,
    medicalInfo,
    drugAllergies,
    chronicDiseases,
    exams,
    analysis,
    aideAuDiagnostic,
    onSubmit,
}) => {
    const [expandedSections, setExpandedSections] = useState({
        personalInfo: true,
        medicalInfo: false,
        drugAllergies: false,
        chronicDiseases: false,
        exams: false,
        analysis: false,
        aideAuDiagnostic: false,
    });

    const toggleSection = (section) => {
        setExpandedSections(prevState => ({
            ...prevState,
            [section]: !prevState[section],
        }));
    };
console.log(aideAuDiagnostic);

    const renderSection = (title, content, sectionName) => {
        const isExpanded = expandedSections[sectionName];
        return (
            <div className="summary-section">
                <h3 onClick={() => toggleSection(sectionName)}>
                    {title} {isExpanded ? '▲' : '▼'}
                </h3>
                {isExpanded && <div>{content}</div>}
            </div>
        );
    };

    const renderDrugAllergiesTable = () => (
        <table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Allergies Médicamenteuses</th>
                </tr>
            </thead>
            <tbody>
                {drugAllergies.map((allergy, index) => (
                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{allergy}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );

    const renderChronicDiseasesTable = () => (
        <table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Maladies Chroniques</th>
                </tr>
            </thead>
            <tbody>
                {chronicDiseases.map((disease, index) => (
                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{disease}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );

    const renderExamsTable = () => (
        <table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Examens</th>
                    <th>Date</th>
                </tr>
            </thead>
            <tbody>
                {exams.map((exam, index) => (
                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{exam.type}</td>
                        <td>{new Date(exam.createdAt).toLocaleDateString()}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );

    const renderAnalysisTable = () => (
        <table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Analyses</th>
                    <th>Date</th>
                </tr>
            </thead>
            <tbody>
                {analysis.map((an, index) => (
                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{an.analysisType}</td>
                        <td>{new Date(an.createdAt).toLocaleDateString()}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );

    return (
        <div className="patient-summary-container">
            <h2>Récapitulatif du Patient</h2>
            {renderSection('Informations Personnelles', (
                <div>
                    <p>Nom: {personalInfo.lastName}</p>
                    <p>Prénom: {personalInfo.firstName}</p>
                    <p>Date de Naissance: {personalInfo.dateOfBirth}</p>
                    <p>Lieu de Naissance: {personalInfo.placeOfBirth}</p>
                    <p>Adresse: {personalInfo.address}</p>
                    <p>Sexe: {personalInfo.sex}</p>
                    <p>Numéro de Téléphone: {personalInfo.phoneNumber}</p>
                    <p>Numéro de Sécurité Sociale: {personalInfo.socialSecurityNumber}</p>
                </div>
            ), 'personalInfo')}
            {renderSection('Informations Médicales', (
                <div>
                    <p>Poids: {medicalInfo.weight}</p>
                    <p>Hauteur: {medicalInfo.height}</p>
                    <p>Groupe Sanguin: {medicalInfo.bloodType}</p>
                    <p>Niveau de Sucre dans le Sang: {medicalInfo.bloodSugarLevel}</p>
                    <p>Pression Artérielle: {medicalInfo.bloodPressure}</p>
                </div>
            ), 'medicalInfo')}
            {drugAllergies.length > 0 && renderSection('Allergies Médicamenteuses', renderDrugAllergiesTable(), 'drugAllergies')}
            {chronicDiseases.length > 0 && renderSection('Maladies Chroniques', renderChronicDiseasesTable(), 'chronicDiseases')}
            {exams.length > 0 && renderSection('Examens', renderExamsTable(), 'exams')}
            {analysis.length > 0 && renderSection('Analyses', renderAnalysisTable(), 'analysis')}
            {aideAuDiagnostic && renderSection('Aide au diagnostic', (
                <div>
                    <p>{aideAuDiagnostic}</p>
                </div>
            ), 'aideAuDiagnostic')}
            <button onClick={onSubmit}
                >
                Soumettre le Dossier
            </button>
        </div>
    );
};

export default PatientSummary;
