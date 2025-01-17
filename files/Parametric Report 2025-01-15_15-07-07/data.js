var dataCsv = `Permutation #,Weather File,EUI (Total) (kWh/m²),EUI (Electricity) (kWh/m²),EUI (Gas) (kWh/m²),Cost (Electricity) (£/kWh/m²),Cost (Nat Gas) (£/kWh/m²),Cost (Oil) (£/kWh/m²),Cost (Coal) (£/kWh/m²),Cost (Grid Displaced) (£/kWh/m²),Cost (Total) (£/kWh/m²),Carbon (Total) (kgCO2/m²),Carbon (Electricity) (kgCO2/m²),Carbon (Nat Gas) (kgCO2/m²),Interior lighting (kWh/m²),Exterior lighting (kWh/m²),Interior Lighting Unregulated (kWh/m²),Space heating (gas) (kWh/m²),Space heating (elec) (kWh/m²),Space cooling (kWh/m²),Pumps (kWh/m²),Fans interior (kWh/m²),Heat Rejection (kWh/m²),DHW heating (kWh/m²),Receptacle equipment (kWh/m²),Elevators escalators (kWh/m²),Data center equipment (kWh/m²),Cooking (gas) (kWh/m²),Cooking (elec) (kWh/m²),Refrigeration (kWh/m²),Process (kWh/m²),Wind (kWh/m²),PV (kWh/m²)
1,5A 2020.epw,125.26,70.15,0.0,0.0,0.0,0.0,0.0,0.0,0.0,28.91,28.91,0.0,8.26,0.0,0.0,0.0,42.66,15.91,0.37,1.92,1.02,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0
2,5A 2050.epw,125.44,70.33,0.0,0.0,0.0,0.0,0.0,0.0,0.0,28.98,28.98,0.0,8.26,0.0,0.0,0.0,37.34,21.0,0.33,2.04,1.34,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0
3,5A 2080.epw,124.66,69.55,0.0,0.0,0.0,0.0,0.0,0.0,0.0,28.66,28.66,0.0,8.29,0.0,0.0,0.0,32.98,24.31,0.3,2.12,1.55,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0
`;

var columnsText = `Permutation #
Weather File
EUI (Total) (kWh/m²)
EUI (Electricity) (kWh/m²)
EUI (Gas) (kWh/m²)
Carbon (Total) (kgCO2/m²)
Carbon (Electricity) (kgCO2/m²)
Carbon (Nat Gas) (kgCO2/m²)
Interior lighting (kWh/m²)
Exterior lighting (kWh/m²)
Interior Lighting Unregulated (kWh/m²)
Space heating (gas) (kWh/m²)
Space heating (elec) (kWh/m²)
Space cooling (kWh/m²)
Pumps (kWh/m²)
Fans interior (kWh/m²)
Heat Rejection (kWh/m²)
DHW heating (kWh/m²)`;