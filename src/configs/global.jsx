import { Bed, Bath, Car, Scan } from "lucide-react";

const routesPath = {
  index: "/",
  realStates: "/imoveis",
  realStateDetails: "/imoveis/detalhes",
};

const iconMap = {
  bed: Bed,
  bath: Bath, 
  car: Car,
  scan: Scan,
};

function getIconElement(name, props = {}) {
  const Icon = iconMap[name];
  return Icon ? <Icon {...props} /> : null;
}

export { routesPath, iconMap, getIconElement };
