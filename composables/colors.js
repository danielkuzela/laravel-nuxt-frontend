export const gradientBgBase = "bg-gradient-to-tr";
export const gradientBgPurplePink = `${gradientBgBase} from-purple-400 via-pink-500 to-red-500`;
export const gradientBgDark = `${gradientBgBase} from-slate-700 via-slate-900 to-slate-800`;
export const gradientBgPinkRed = `${gradientBgBase} from-pink-400 via-red-500 to-yellow-500`;

export const colorsBgLight = {
    basic: "bg-white text-black",
    primary: "bg-emerald-500 border-emerald-500 text-white",
    secondary: "bg-red-500 border-red-500 text-white",
};

export const colorsText = {
    basic: "text-black dark:text-slate-100",
    primary: "text-emerald-500",
    secondary: "text-red-500",
};

export const colorsOutline = {
    basic: [colorsText.basic, "border-gray-100"],
    primary: [colorsText.primary, "border-emerald-500"],
    secondary: [colorsText.secondary, "border-red-500"],
};

export const getButtonColor = (
    color,
    isOutlined,
    hasHover,
    isActive = false
) => {
    const colors = {
        ring: {
            basic: "ring-gray-200 ",
            basicDark: "ring-gray-300",
            basicGray: "ring-gray-300",
            primary: "ring-emerald-400",
            secondary: "ring-red-300",
        },
        active: {
            basic: "bg-gray-100",
            basicDark: "bg-gray-100",
            basicGray: "bg-gray-200",
            primary: "bg-emerald-700",
            secondary: "bg-red-700",
        },
        bg: {
            basic: "bg-white text-black",
            basicDark: "bg-black text-white",
            basicGray: "bg-gray-100 text-gray-500",
            primary: "bg-emerald-500 text-white",
            secondary: "bg-red-600 dark:bg-red-500 text-white",
        },
        bgHover: {
            basic: "hover:bg-gray-100",
            basicDark: "hover:bg-transparent hover:text-gray-900",
            basicGray: "hover:bg-gray-300 hover:text-gray-900",
            primary: "hover:bg-emerald-700 hover:border-emerald-700",
            secondary: "hover:bg-red-700 hover:border-red-700",
        },
        borders: {
            basic: "border-white",
            basicDark: "border-black",
            basicGray: "border-gray-100",
            primary: "border-emerald-500",
            secondary: "border-red-600",
        },
        text: {
            primary: "text-emerald-600",
            secondary: "text-red-600",
        },
        outlineHover: {
            basicDark: "hover:bg-black hover:text-white",
            basicGray: "hover:bg-black hover:text-white",
            primary: "hover:bg-emerald-600 hover:text-white hover:text-white",
            secondary: "hover:bg-red-600 hover:text-white hover:text-white",
        },
    };

    if (!colors.bg[color]) {
        return color;
    }

    const isOutlinedProcessed =
        isOutlined && ["basic"].indexOf(color) < 0;

    const base = [colors.borders[color], colors.ring[color]];

    if (isActive) {
        base.push(colors.active[color]);
    } else {
        base.push(isOutlinedProcessed ? colors.text[color] : colors.bg[color]);
    }

    if (hasHover) {
        base.push(
            isOutlinedProcessed ? colors.outlineHover[color] : colors.bgHover[color]
        );
    }

    return base;
};
