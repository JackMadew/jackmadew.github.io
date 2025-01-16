var dataCsv = `Permutation #,External Window Opening Type,Weather File,EUI (Total) (kWh/m²),EUI (Electricity) (kWh/m²),EUI (Gas) (kWh/m²),Cost (Electricity) ($/kWh/m²),Cost (Nat Gas) ($/kWh/m²),Cost (Oil) ($/kWh/m²),Cost (Coal) ($/kWh/m²),Cost (Grid Displaced) ($/kWh/m²),Cost (Total) ($/kWh/m²),Carbon (Total) (kgCO2/m²),Carbon (Electricity) (kgCO2/m²),Carbon (Nat Gas) (kgCO2/m²),Interior lighting (kWh/m²),Exterior lighting (kWh/m²),Interior Lighting Unregulated (kWh/m²),Space heating (gas) (kWh/m²),Space heating (elec) (kWh/m²),Space cooling (kWh/m²),Pumps (kWh/m²),Fans interior (kWh/m²),Heat Rejection (kWh/m²),DHW heating (kWh/m²),Receptacle equipment (kWh/m²),Elevators escalators (kWh/m²),Data center equipment (kWh/m²),Cooking (gas) (kWh/m²),Cooking (elec) (kWh/m²),Refrigeration (kWh/m²),Process (kWh/m²),Wind (kWh/m²),PV (kWh/m²)
1,External window opening - Luften,5A 2020.epw,151.46,84.41,11.92,25.75,1.02,0.0,0.0,0.0,26.77,36.93,34.79,2.15,8.26,0.0,0.0,0.0,56.84,15.84,0.54,1.92,1.01,11.92,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0
2,External window opening - Luften,5A 2050.epw,150.81,83.77,11.92,25.55,1.02,0.0,0.0,0.0,26.57,36.67,34.52,2.15,8.26,0.0,0.0,0.0,50.26,21.35,0.49,2.05,1.36,11.92,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0
3,External window opening - Luften,5A 2080.epw,149.63,82.59,11.92,25.19,1.02,0.0,0.0,0.0,26.21,36.18,34.03,2.15,8.29,0.0,0.0,0.0,45.04,25.07,0.45,2.14,1.6,11.92,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0
4,External window opening,5A 2020.epw,137.28,70.24,11.92,21.42,1.02,0.0,0.0,0.0,22.45,31.09,28.94,2.15,8.26,0.0,0.0,0.0,42.48,16.17,0.37,1.93,1.03,11.92,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0
5,External window opening,5A 2050.epw,137.45,70.41,11.92,21.47,1.02,0.0,0.0,0.0,22.5,31.16,29.01,2.15,8.26,0.0,0.0,0.0,37.13,21.27,0.33,2.05,1.36,11.92,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0
6,External window opening,5A 2080.epw,136.7,69.66,11.92,21.25,1.02,0.0,0.0,0.0,22.27,30.85,28.7,2.15,8.29,0.0,0.0,0.0,32.78,24.6,0.3,2.13,1.57,11.92,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0
`;

var columnsText = `Permutation #
External Window Opening Type
Weather File
EUI (Total) (kWh/m²)
Cost (Electricity) ($/kWh/m²)
Carbon (Total) (kgCO2/m²)
Carbon (Electricity) (kgCO2/m²)
Carbon (Nat Gas) (kgCO2/m²)
Interior lighting (kWh/m²)
Space heating (elec) (kWh/m²)
Space cooling (kWh/m²)
Pumps (kWh/m²)
Fans interior (kWh/m²)
Heat Rejection (kWh/m²)
DHW heating (kWh/m²)`;