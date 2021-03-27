
function getMenuItem({key, route = "", label = "", options = [], isButton = false}) {
    return {
        key: key,
        route: route,
        label: label,
        options: [...options],
        isButton: isButton
    };
}

const menuItems = [
    getMenuItem({key: 0,route: "about", label: "About", options: ["Who We Are", "Leadership \"Our Leaders\""]}),
    getMenuItem({key: 1,route: "services", label: "Our Services", options: ["Our Services"]}),
    getMenuItem({key: 2,route: "whyplum", label: "Why Plum Telemed", options: ["Who We Are"]}),
    getMenuItem({key: 3,route: "features", label: "Features"}),
    getMenuItem({key: 4,route: "contactus", label: "Contact Us"}),
    getMenuItem({key: 5,route: "login", label: "Log In", isButton: true}),
    getMenuItem({key: 6,route: "signup", label: "Sign Up", isButton: true}),
];

export default menuItems;