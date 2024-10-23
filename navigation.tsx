import React from "react";
import Link from "next/link";
<script src="https://cdn.tailwindcss.com"></script>
export default function Navbar(){
    return( 
        <fieldset>
        <div className="font-bold bg-emerald-200">
            <Link  href ="/About">About</Link>
            <br />
              
            <Link href ="/Contact">Contact</Link>
            <br />
            <Link href ="/Program">Program</Link>
            <br />
            <Link href ="/Services">Services</Link>
            <br />
            <Link href ="/Car">Cars</Link>
        </div>
        </fieldset>
    )
}