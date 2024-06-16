// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import User from 'path/to/interfaces';
// eslint-disable-next-line @typescript-eslint/no-unused-vars


export type User = {
  id:string;
  firstname: string
  lastname: string
  email: string
  password: string
  role: string
  sex: string
  statu: string
  created_at: string
  updated_at: string
}

export type Patient = {
  personalInfo: any;
  analysis:any ;
  chronicDiseases:any;
  drugAllergies:any;
  exams:any;
  medicalInfo:any;
  aideAuDiagnostic:any;
  idPatient: string;
  lastName: string;
  firstName: string;
  dateOfBirth: string;
  address : string;
  placeOfBirth: string;
  postalAddress: string;
  sex: string;
  phoneNumber: string;
  email: string;
  socialSecurityNumber: string;
};

export type MedicalIdentity = {
  idPatient: any;
  weight: number;
  height: number;
  lifestyle: string[];
  riskFactors: string[];
  bloodType: string;
  bloodSugarLevel: number;
  bloodPressure: string;
};

export type RadiologicalExam = {
  idPatient: number;
  exams: Exam[];
};

export type Exam = {
  idExam: number;
  type: string;
  files: ExtendedFile[];
  createdAt: Date;
};

export type MedicalAnalysis = {
  idPatient: number;
  analyses: Analysis[];
};

export type Analysis = {
  idAnalysis: number;
  analysisType: string;
  files: ExtendedFile[];
  createdAt: Date;
};

interface ExtendedFile {
  idFile: number;
  name: string;
  path: string;
}
