import React from 'react'

export default function Customers(props) {
  return (
    <>
        <h3 style={{textAlign: "center", color: props.mode==="dark"?"white":"black"}}>Our Customers: &nbsp;</h3>
    <div className="my-4 mx-4" style={{backgroundColor: "#4ADC26", borderRadius: "20px", padding: "10px", color: props.mode==="dark"?"white":"black"}}>
        <ul>
            <li>M/s Godrej & Boyce, Pl-14, for the supply of Machined components i.e. Punches, 
                Mandrels, Other maintenance components, Fabricated components i.e. Fixtures, 
                Inspection gauges etc and std. items i.e. Drills, spanner etc.</li>
            <li>M/s Godrej & Boyce, Bhagwanpur plant (Uttrakhand), for the supply of 
                Machined components i.e. Punches and std. items i.e. Drills, spanner etc.</li>
            <li>M/s Smita Industries, Vasai, for the supply of valve body parts.</li>
            <li>M/s RUSK Choclates, Dadar, for the supply of 3D moulds for choclates.</li>
            <li>M/s Quick Industrial suppliers, Vasai (Tier 1 supplier of Mahindra & Mahindra 
                Tractor Division), for the supply of brake shaft pedal.</li>
            <li>M/s Naminath Engineering Pvt. Ltd., Vasai (Tier 1 supplier of Mahindra & 
                Mahindra Auto Division), for the supply of power steering connector.</li>
            <li>M/s. Varroc Engineering Pvt. Ltd., Aurangabad, for the supply of Automation 
                projects in wire cutting machine.</li>
            <li>M/s. NSD Global Trade Pvt. Ltd., Vasai, for the supply of Metal and teflon 
                components for glass production.</li>
            <li>M/s. Raychem RPG Pvt. Ltd., Vasai, for the design & supply of various machine 
                related engineering goods.</li>
            <li>M/s. Yes Imported Solutions Pvt. Ltd., Lower Parel, Mumbai, for the production 
                of Bollards.</li>
            <li>M/s. Megha Rubber, Vasai, for the labour jobs on Turning and grinding 
                components.</li>
            <li>M/s. Sujan Industries, Vasai, for the labour jobs of Grinding of Bushes.</li>
            <li>M/s. Bhansali Techno, Vasai, for the labour jobs of CNC items, especially 
                Flanges.</li>
            <li>M/s. Aashish Products, Vasai, for the labour jobs on Brass components.</li>
            <li>M/s. Quasar Innovative Solutions, for Solar Plant and accessories development.</li>
        </ul>
    </div>
    </>
  )
}
