import { Route, Routes } from "react-router-dom";
import { Clientes, Facturas, PaxinaApp, Productos } from "./PaxinasPrivadasApp";
import { LinksDentroApp } from "../componentes/LinksPrivadosApp";
import { NoPage } from "./PaxinasPublicasApp";


export default function RutasDentroApp(){
    return <>
        <Routes>
            <Route path="/paxinaapp0" element={<LinksDentroApp />}>
                <Route index element={<PaxinaApp />} />
                <Route path="facturas" element={<Facturas />} />
                <Route path="clientes" element={<Clientes />} />
                <Route path="productos" element={<Productos />} /> 
                <Route path="*" element={<NoPage />} />
            </Route>
        </Routes>
        
    </>
}