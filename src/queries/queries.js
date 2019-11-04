import gql from "graphql-tag";

export const BROADCAST_LAST = gql`
    query getBroadcast{
        getBroadcast{
            BId
            Name
            Remitente
            Estado
        }
    }
`;

export const BROADCAST = gql`
    query getBroadcast{
        getBroadcast{
            BId
            Name
          	Lineas
          	FechaIn
          	Tin
          	FechaOut
          	Tout
            Remitente
          	Logica
          	TipoAgente
            Estado
        }
    }
`;

export const BROADCAST_CANT = gql`
    query getCantBroadcast{
        getCantBroadcast {
            Sent
        Estado
        CantBroadcast
        }
    }
`;




export const CANT_RESPUESTAS = gql`
    query getCantRespuetas{
        getCantRespuetas{
            BId
            AgentId
            CantPtas
            CantLineas
            RtasHasta
            CantRtas
        }
    }
`;

export const CANT_RTAS_COMP = gql`
    query getCantRtasComps{
        getCantRtasComps{
            Bid
            CantLineas
            Send
            descrip
            CantRtasComp
        }
    }
`;
