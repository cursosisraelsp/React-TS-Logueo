import { Route, Routes } from "react-router-dom";
import { PaxinaApp } from "./PaxinasDentroApp";

export default function RutasDentroApp(){
    return <>
        <Routes>
            <Route path="paxinaapp0" element={<PaxinaApp />} />
        </Routes>
    </>
}