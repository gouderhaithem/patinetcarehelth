import React, { useState, useEffect } from 'react';
import { FaPlus, FaSave } from 'react-icons/fa';
import { AiOutlineMinusCircle } from 'react-icons/ai';

export type DrugAllergyFormData = string[];

type DrugAllergiesFormProps = {
    onSubmit: (allergies: DrugAllergyFormData) => void;
    initialData: DrugAllergyFormData;
};

const DrugAllergiesForm: React.FC<DrugAllergiesFormProps> = ({ onSubmit, initialData }) => {
    const [allergies, setAllergies] = useState<string[]>(initialData);
    const [inputValue, setInputValue] = useState('');

    useEffect(() => {
        setAllergies(initialData);
    }, [initialData]);

    const handleAdd = () => {
        if (inputValue.trim() !== '') {
            setAllergies(prev => [...prev, inputValue.trim()]);
            setInputValue('');
        }
    };

    const handleDelete = (index: number) => {
        setAllergies(allergies => allergies.filter((_, i) => i !== index));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(allergies);
    };

    return (
        <div className="list-form-container" style={{ display: 'flex', justifyContent: 'space-between', padding: '20px', gap: '20px' }}>
            <div className="list-container" style={{ flex: 1, backgroundColor: '#fff', borderRadius: '8px', padding: '20px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
                <h2>Liste des Allergies Médicamenteuses</h2>
                <ul>
                    {allergies.map((allergy, index) => (
                        <li key={index} style={{ margin: '' }}>
                            {allergy}
                            <a onClick={() => handleDelete(index)} style={{ color: 'red', cursor: 'pointer' }}>
                                <AiOutlineMinusCircle style={{ cursor: 'pointer', color: 'red', marginLeft: '10px' }} />
                            </a>
                        </li>
                    ))}
                    {allergies.length === 0 && (
                        <li style={{ color: 'gray', fontStyle: 'italic' }}>Aucune allergie médicamenteuse</li>
                    )}
                </ul>
            </div>
            <div className="form-container" style={{ flex: 1, backgroundColor: '#fff', borderRadius: '8px', padding: '20px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
                <h2>Ajouter une Allergie</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        placeholder="Ajouter une allergie médicamenteuse"
                        style={{ padding: '8px', margin: '10px 0', width: '100%' }}
                    />
                    <button type="button" onClick={handleAdd} style={{  marginRight: '10px' }}>
                        <FaPlus /> Ajouter
                    </button>
                    <button type="submit" >
                        <FaSave /> Enregistrer Les Allergies
                    </button>
                </form>
            </div>
        </div>
    );
};

export default DrugAllergiesForm;
