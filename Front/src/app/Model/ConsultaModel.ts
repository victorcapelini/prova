export class ConsultaModel {
    Id: number = 0
    Paciente: string = '';
    DataNascimentoPaciente: Date;
    Inicio: Date;
    Fim: Date;
    Observacoes: string = '';
}

export interface IConsultaModel {
    Id: number;
    Paciente: string;
    DataNascimentoPaciente: string;
    Inicio: string;
    Fim: string;
    Observacoes: string;
}