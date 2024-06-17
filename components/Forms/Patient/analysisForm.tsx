import React, { useState, useEffect } from 'react';
import Select from "react-select";
import { FaPlus, FaTrash } from 'react-icons/fa';
import topAnalyses from '../../../public/data/analysesTop100.json';
import { Analysis } from '../../../interfaces';

type AnalysisFormProps = {
    onSubmit: (analysis: Analysis[]) => void;
    initialData: Analysis[];
};

const AnalysisForm: React.FC<AnalysisFormProps> = ({ onSubmit, initialData }) => {
    const [analysis, setAnalysis] = useState<Analysis[]>(initialData);
    const [selectedAnalysis, setSelectedAnalysis] = useState<{ label: string, value: string } | null>(null);
    const [customAnalysis, setCustomAnalysis] = useState('');

    useEffect(() => {
        setAnalysis(initialData);
    }, [initialData]);

    const handleSelectChange = (selectedOption) => {
        if (selectedOption.value !== 'Autre') {
            const newAnalysis = {
                idAnalysis: Math.random(),
                analysisType: selectedOption.label,
                files: [],
                createdAt: new Date()
            };
            setAnalysis(prev => [...prev, newAnalysis]);
            setSelectedAnalysis(null);
        } else {
            setSelectedAnalysis(selectedOption);
        }
    };

    const handleAddAnalysis = () => {
        if (customAnalysis.trim() !== '') {
            const newAnalysis = {
                idAnalysis: Math.random(),
                analysisType: customAnalysis,
                files: [],
                createdAt: new Date()
            };
            setAnalysis(prev => [...prev, newAnalysis]);
            setCustomAnalysis('');
            setSelectedAnalysis(null);
        }
    };

    const handleDeleteAnalysis = (idAnalysis: number) => {
        setAnalysis(analysis => analysis.filter(a => a.idAnalysis !== idAnalysis));
    };

    const handleFileChange = (files: FileList, an: Analysis) => {
        an.files.push(
            ...Array.from(files).map(file => ({
                idFile: Math.random(),
                name: file.name,
                size: file.size,
                type: file.type,
                path: URL.createObjectURL(file)
            }))
        );
        setAnalysis([...analysis]);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(analysis);
    };

    return (
        <div className="analysis-form-container">
            <h1>Gestion des Analyses Médicales</h1>
            <label style={{ display: 'block', marginBottom: '10px' }}>Type d'analyse: </label>
            <Select
                options={topAnalyses}
                value={selectedAnalysis}
                onChange={handleSelectChange}
                placeholder="Sélectionner une analyse"
            />
            {selectedAnalysis && selectedAnalysis.value === 'Autre' && (
                <div>
                    <input
                        type="text"
                        value={customAnalysis}
                        onChange={(e) => setCustomAnalysis(e.target.value)}
                        placeholder="Précisez le type d'analyse"
                    />
                    <FaPlus onClick={handleAddAnalysis} style={{ cursor: 'pointer' }} />
                </div>
            )}
            <h2>Analyses</h2>
            {analysis.map((an, index) => (
                <div key={index} style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}>
                    <span>
                        {an.analysisType} - {an.createdAt.toLocaleDateString()}
                    </span>
                    <div>
                        <input
                            type="file"
                            multiple
                            onChange={(e) => e.target.files && handleFileChange(e.target.files, an)}
                        />
                        <FaTrash onClick={() => handleDeleteAnalysis(an.idAnalysis)}
                            style={{ cursor: 'pointer', marginLeft: '10px' }} />
                    </div>
                </div>
            ))}
            {analysis.length === 0 && (
                <div style={{ color: 'gray', fontStyle: 'italic' }}>Aucune analyse médicale</div>
            )}
            <button onClick={handleSubmit}>Enregistrer Les Analyses</button>
        </div>
    );
};

export default AnalysisForm;
