var dataCsv = `Permutation #,Weather File,EUI (Total) (kWh/m�),EUI (Electricity) (kWh/m�),EUI (Gas) (kWh/m�),Cost (Electricity) (�/kWh/m�),Cost (Nat Gas) (�/kWh/m�),Cost (Oil) (�/kWh/m�),Cost (Coal) (�/kWh/m�),Cost (Grid Displaced) (�/kWh/m�),Cost (Total) (�/kWh/m�),Carbon (Total) (kgCO2/m�),Carbon (Electricity) (kgCO2/m�),Carbon (Nat Gas) (kgCO2/m�),Interior lighting (kWh/m�),Exterior lighting (kWh/m�),Interior Lighting Unregulated (kWh/m�),Space heating (gas) (kWh/m�),Space heating (elec) (kWh/m�),Space cooling (kWh/m�),Pumps (kWh/m�),Fans interior (kWh/m�),Heat Rejection (kWh/m�),DHW heating (kWh/m�),Receptacle equipment (kWh/m�),Elevators escalators (kWh/m�),Data center equipment (kWh/m�),Cooking (gas) (kWh/m�),Cooking (elec) (kWh/m�),Refrigeration (kWh/m�),Process (kWh/m�),Wind (kWh/m�),PV (kWh/m�)
1,5A 2020.epw,125.26,70.15,0.0,0.0,0.0,0.0,0.0,0.0,0.0,28.91,28.91,0.0,8.26,0.0,0.0,0.0,42.66,15.91,0.37,1.92,1.02,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0
2,5A 2050.epw,125.44,70.33,0.0,0.0,0.0,0.0,0.0,0.0,0.0,28.98,28.98,0.0,8.26,0.0,0.0,0.0,37.34,21.0,0.33,2.04,1.34,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0
3,5A 2080.epw,124.66,69.55,0.0,0.0,0.0,0.0,0.0,0.0,0.0,28.66,28.66,0.0,8.29,0.0,0.0,0.0,32.98,24.31,0.3,2.12,1.55,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0
`;

var columnsText = `Permutation #
Weather File
EUI (Total) (kWh/m�)
EUI (Electricity) (kWh/m�)
EUI (Gas) (kWh/m�)
Carbon (Total) (kgCO2/m�)
Carbon (Electricity) (kgCO2/m�)
Carbon (Nat Gas) (kgCO2/m�)
Interior lighting (kWh/m�)
Exterior lighting (kWh/m�)
Interior Lighting Unregulated (kWh/m�)
Space heating (gas) (kWh/m�)
Space heating (elec) (kWh/m�)
Space cooling (kWh/m�)
Pumps (kWh/m�)
Fans interior (kWh/m�)
Heat Rejection (kWh/m�)
DHW heating (kWh/m�)`;