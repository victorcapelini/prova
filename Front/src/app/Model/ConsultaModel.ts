export class ConsultaModel {
    Id: number = 0
    Paciente: string = '';
    DataNascimentoPaciente: Date;
    Inicio: Date;
    Fim: Date;
    Observacoes: string = '';   
}

export interface IConsultaModel {
    id: number;
    paciente: string;
    dataNascimentoPaciente: string;
    inicio: string;
    fim: string;
    observacoes: string;
}

export function ConsultaInterfaceToModel(consulta: IConsultaModel): ConsultaModel {
    let consultaModel = new ConsultaModel();
    consultaModel.Id = consulta.id;
    consultaModel.Paciente = consulta.paciente;
    consultaModel.DataNascimentoPaciente = new Date(consulta.dataNascimentoPaciente);
    consultaModel.Inicio = new Date(consulta.inicio);
    consultaModel.Fim = new Date(consulta.fim);
    consultaModel.Observacoes = consulta.observacoes;
    return consultaModel
}

export interface IConsultaRequest {
    success: boolean;
    data: IConsultaModel;
}