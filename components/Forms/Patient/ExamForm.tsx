import React, { useState, useEffect } from 'react';
import Select from "react-select";
import { FaPlus, FaTrash } from 'react-icons/fa';
import topExams from '../../../public/data/examsTop100.json';
import { Exam } from '../../../interfaces';

type ExamFormProps = {
    onSubmit: (data: Exam[]) => void;
    initialData: Exam[];
};

const ExamForm: React.FC<ExamFormProps> = ({ onSubmit, initialData }) => {
    const [exams, setExams] = useState<Exam[]>(initialData);
    const [selectedExam, setSelectedExam] = useState(null);
    const [customExam, setCustomExam] = useState("");

    useEffect(() => {
        setExams(initialData);
    }, [initialData]);

    const handleSelectChange = (selectedOption) => {
        if (selectedOption.value !== "Autre") {
            const newExam = {
                idExam: Math.random(),
                type: selectedOption.label,
                files: [],
                createdAt: new Date()
            };
            setExams(prev => [...prev, newExam]);
            setSelectedExam(null);
        } else {
            setSelectedExam(selectedOption);
        }
    };

    const handleAddCustomExam = () => {
        if (customExam.trim() !== "") {
            const newExam = {
                idExam: Math.random(),
                type: customExam,
                files: [],
                createdAt: new Date()
            };
            setExams(prev => [...prev, newExam]);
            setCustomExam("");
            setSelectedExam(null);
        }
    };

    const handleDeleteExam = (idExam) => {
        setExams(exams => exams.filter(exam => exam.idExam !== idExam));
    };

    const handleFileChange = (files, exam) => {
        exam.files.push(...files);
        setExams([...exams]); // Update to trigger re-render
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(exams);
    };

    return (
        <div className="exam-form-container">
            <h1>Gestion des Examens Médicaux</h1>
            <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', marginBottom: '10px' }}>Type d'examen:</label>
                <Select
                    options={topExams.map(exam => ({ value: exam.value, label: exam.label }))}
                    value={selectedExam}
                    onChange={handleSelectChange}
                    placeholder="Sélectionner un examen"
                />
                {selectedExam && selectedExam.value === "Autre" && (
                    <div>
                        <input
                            type="text"
                            value={customExam}
                            onChange={(e) => setCustomExam(e.target.value)}
                            placeholder="Spécifiez le nom de l'examen"
                        />
                        <FaPlus onClick={handleAddCustomExam} style={{ cursor: 'pointer' }} />
                    </div>
                )}
            </div>
            <h2>Liste des Examens</h2>
            {exams.map((exam, index) => (
                <div key={index} style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}>
                    <div style={{ fontWeight: 'bold', marginBottom: '5px' }}>
                        {exam.type} - {exam.createdAt.toLocaleDateString()}
                        <FaTrash onClick={() => handleDeleteExam(exam.idExam)} style={{ cursor: 'pointer', marginLeft: '10px' }} />
                    </div>

                    {exam.files.map((file, fileIndex) => (
                        <span key={fileIndex} style={{ marginRight: '10px' }}>{file.name}</span>
                    ))}
                    <div>
                        <input
                            type="file"
                            multiple
                            onChange={(e) => e.target.files && handleFileChange(Array.from(e.target.files), exam)}
                            style={{ display: 'block', marginBottom: '5px' }}
                        />
                    </div>
                </div>
            ))}
            {exams.length === 0 && (
                <div style={{ color: 'gray', fontStyle: 'italic' }}>Aucun examen médical</div>
            )}
            <button onClick={handleSubmit}>Enregistrer Les Examens</button>
        </div>
    );
};

export default ExamForm;