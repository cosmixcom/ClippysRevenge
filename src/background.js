// chrome.contextMenus.create({
//     id: "lavaCopyElement",
//     title: "Copy Element Code",
//     contexts: ["all"]
// });

// chrome.contextMenus.onClicked.addListener((info, tab) => {
//     if (info.menuItemId === "lavaCopyElement") {
//         // console.log(info)
//         // console.log(tab)
//         // Do something when the context menu item is clicked
//         chrome.tabs.sendMessage(tab.id, { 
//             action: "contextMenuClicked",
//             x: info.x,
//             y: info.y
//           });
//     }
// });
