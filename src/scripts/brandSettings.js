export const brandSettings = {
    logo: {
        src: "", // Add logo image URL here (e.g., "/assets/logo.png")
        alt: "[Re:Wear]",
        variations: [ // you might have wordmarks / different color variants than what is listed here, that's fine just adjust it
            { 
                name: "Primary - Light Background", 
                src: "", // Add image path
                bg: "#F2EFEB", 
                darkText: true,
                description: "Use this version on white or light backgrounds."
            },
            { 
                name: "Primary - Dark Background", 
                src: "", // Add image path
                bg: "#4A1719", 
                darkText: false,
                description: "Use this version on dark or brand-colored backgrounds."
            },
            { 
                name: "Monochrome - Black", 
                src: "", // Add image path
                bg: "#ffffff", 
                darkText: true,
                description: "For black and white print or single-color applications."
            },
            { 
                name: "Monochrome - White", 
                src: "", // Add image path
                bg: "#000000", 
                darkText: false,
                description: "For dark backgrounds where color is not permitted."
            }
        ]
    },
    favicon: "/favicon.svg", // Add favicon URL here
    typography: {
        primaryFont: "Alexandria",  // this will automatically get set as the page font
        secondaryFont: "Riant Display", // dont be a bum, go find some google/adobe fonts you like. just make sure to load them in the stylesheet or Layout astro file 
        baseSize: "16px",
        lineHeight: "1.5",
        paragraphSpacing: "2"
    },
    palette: [ // these will load automatically into your page into the color section
        { name: "White", hex: "#ffffff" },
        { name: "Black", hex: "#000000" },
        { name: "Primary Maroon", hex: "#4A1719" },
        { name: "Accent Blue", hex: "#402F8E" },
        { name: "Light Blue", hex: "#7B77D9" },
        { name: "Accent Mustard", hex: "#BD9E3D" },
        { name: "Dark Mustard", hex: "#977718" },
        { name: "Beige", hex: "#EDE8E2" },
        { name: "Lighter Beige", hex: "#F2EFEB" }
    ]
};