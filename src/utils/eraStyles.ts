
type EraType = 'medieval' | 'cyberpunk' | 'apocalyptic';

export const getEraType = (era: string | undefined): EraType => {
  if (era === 'medieval') return 'medieval';
  if (era === 'cyberpunk') return 'cyberpunk';
  if (era === 'apocalyptic') return 'apocalyptic';
  return 'medieval'; // Default fallback
};

export const getHeaderClasses = (eraType: EraType): string => {
  if (eraType === 'medieval') {
    return "bg-medieval-dark text-medieval-light border-b border-medieval";
  } else if (eraType === 'cyberpunk') {
    return "bg-cyberpunk-dark text-cyberpunk-light border-b border-cyberpunk";
  } else {
    return "bg-apocalyptic-dark text-apocalyptic-light border-b border-apocalyptic";
  }
};

export const getContainerClasses = (eraType: EraType): string => {
  if (eraType === 'medieval') {
    return "bg-medieval-dark/20";
  } else if (eraType === 'cyberpunk') {
    return "bg-cyberpunk-dark/20";
  } else {
    return "bg-apocalyptic-dark/20";
  }
};

export const getTitleClasses = (eraType: EraType): string => {
  if (eraType === 'medieval') {
    return "font-medieval text-medieval-light";
  } else if (eraType === 'cyberpunk') {
    return "font-cyberpunk text-cyberpunk-light";
  } else {
    return "font-apocalyptic text-apocalyptic-light";
  }
};

export const getSectionClasses = (eraType: EraType): string => {
  if (eraType === 'medieval') {
    return "bg-medieval-dark/30 border border-medieval";
  } else if (eraType === 'cyberpunk') {
    return "bg-cyberpunk-dark/30 border border-cyberpunk";
  } else {
    return "bg-apocalyptic-dark/30 border border-apocalyptic";
  }
};

export const getButtonClasses = (eraType: EraType): string => {
  if (eraType === 'medieval') {
    return "";
  } else if (eraType === 'cyberpunk') {
    return "bg-cyberpunk hover:bg-cyberpunk-accent";
  } else {
    return "bg-apocalyptic hover:bg-apocalyptic-accent";
  }
};
