function Registry () {
    console.log(" ")
    console.log("Files:")
    Setting__Command_List()
    console.log("Add File (?)")
    console.log(" ")
    console.log("Juno > Registry > ____")
    pause(5000)
    spriteutils.setConsoleOverlay(false)
    blockSettings.writeString("DirectorySearch", game.askForString("Registry > ____"))
    blockSettings.writeString("MostRecentFile", blockSettings.readString("DirectorySearch"))
    if (blockSettings.readString("DirectorySearch") == "Add") {
        Registry_Add()
    } else if (blockSettings.readString("DirectorySearch") == "View") {
        Registry_View()
    } else if (blockSettings.readString("DirectorySearch") == "Delete") {
        Registry_Delete()
    } else {
        Registry001()
    }
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (blockSettings.readString("MostRecentFile") == "Directory") {
        Directory()
    } else if (blockSettings.readString("MostRecentFile") == "Version") {
        Version()
    } else if (blockSettings.readString("MostRecentFile") == "VersionLog") {
        VersionLog()
    } else if (blockSettings.readString("MostRecentFile") == "Files") {
        Files()
    } else if (blockSettings.readString("MostRecentFile") == "Registry") {
        Registry()
    } else if (blockSettings.readString("MostRecentFile") == "Help") {
        Help()
    }
})
function Setting__Command_List () {
    console.log("Files")
    pause(10)
    console.log("Directory")
    pause(10)
    console.log("Version")
    pause(10)
    console.log("VersionLog")
    pause(10)
    console.log("Bootloader")
    pause(10)
    console.log("Registry")
    pause(10)
    console.log(" ")
    console.log("Juno > ____")
}
function Registry_Add () {
    blockSettings.writeString("MostRecentFile", blockSettings.readString("DirectorySearch"))
    Temporary_File_Name = game.askForString("Insert File Name")
    Temporary_File_Data = game.askForString("Insert File Data")
    blockSettings.writeString(Temporary_File_Name, Temporary_File_Data)
    spriteutils.setConsoleOverlay(true)
    console.log("Juno Kernel Version " + blockSettings.readNumber("Version"))
    console.log(" ")
    console.log("\"" + blockSettings.readString(Temporary_File_Name) + "\"" + "" + "has Been Created.")
}
function Juno () {
    blockSettings.writeNumber("Version", 27)
    blockSettings.writeString("VersionLog", "Version 0027")
    SystemReinstallVerificationBoolean = false
    blockSettings.writeString("Directory", "Directory")
    blockSettings.writeString("Directory.Search", "DirectorySearch")
    blockSettings.writeString("Files", "Settings + Commands")
    blockSettings.writeString("Registry", "ver0.27.0")
    blockSettings.writeString("Help", "ver0.27.0")
    Command_List = [
    "Directory",
    "Version",
    "VersionLog",
    "Files",
    "Registry",
    "Help"
    ]
    Juno_Terminal()
}
function Registry001 () {
    spriteutils.setConsoleOverlay(true)
    console.log("Juno Kernel Version " + blockSettings.readNumber("Version"))
    console.log(" ")
    console.log(" ")
    console.log("Files:")
    Setting__Command_List()
    console.log(" ")
    console.log("File Not Found.")
    console.log(" ")
    console.log("Juno > Registry > ____")
}
function Juno_Terminal () {
    spriteutils.setConsoleOverlay(true)
    pause(100)
    console.log("Juno Kernel Version " + blockSettings.readNumber("Version"))
    pause(500)
    console.log("Data Used: " + blockSettings.list().length + " Settings, " + ("" + Command_List.length + " Command(s)"))
    console.log("")
    pause(500)
    if (Command_List.length > 0) {
        pause(500)
        console.log(" ")
        if (blockSettings.exists("MostRecentFile")) {
            console.log("SHORTCUTS")
            console.log("----------------")
            console.log(blockSettings.readString("MostRecentFile"))
            console.log("Press [A] to Access!")
        }
        console.log(" ")
        console.log("COMMANDS")
        console.log("----------------")
        console.log(Command_List)
        console.log("Press [MENU] to Access!")
    } else {
        console.log(" ")
        console.log("Error 000 - No Commands")
        console.log("Listed in Directory.")
        pause(500)
        console.log(" ")
        console.log("Please Reinstall the Juno")
        console.log("Kernel or Upgrade to a ")
        console.log("newer version.")
        pause(500)
        console.log(" ")
        console.log("Current Version:")
        console.log("Juno Kernel Version " + blockSettings.readNumber("Version"))
        pause(500)
        if (blockSettings.readNumber("Version") <= 0) {
            console.log(" ")
            console.log("Looking for new Versions")
            for (let index = 0; index < randint(4, 10); index++) {
                console.log(".")
                pause(500)
            }
            console.log("No Newer Versions Found.")
            console.log("Reinstalling the Juno ")
            console.log("Kernel...")
            pause(1000)
            blockSettings.clear()
            game.reset()
        }
    }
    console.log(" ")
    console.log("Juno > ____")
}
function Help () {
    spriteutils.setConsoleOverlay(true)
    blockSettings.writeString("MostRecentFile", blockSettings.readString("DirectorySearch"))
    console.log("Juno Kernel Version " + blockSettings.readNumber("Version"))
    console.log(" ")
    console.log("Help(?)")
    console.log("- Have any questions?")
    pause(100)
    console.log("- Have any comments?")
    pause(100)
    console.log("Contact Erik_ or Erik44b on Github or go")
    console.log("to the JunoKernel Repository to ask any")
    console.log("questions / add / remove something")
}
function Version () {
    blockSettings.writeString("MostRecentFile", blockSettings.readString("DirectorySearch"))
    console.log(" ")
    console.log("This version is up ")
    console.log("to date.")
    console.log(" ")
    console.log("Juno > ____")
}
controller.menu.onEvent(ControllerButtonEvent.Pressed, function () {
    spriteutils.setConsoleOverlay(false)
    blockSettings.writeString("DirectorySearch", game.askForString("Insert Command"))
    if (blockSettings.exists(blockSettings.readString("DirectorySearch"))) {
        spriteutils.setConsoleOverlay(true)
        console.log("Juno Kernel Version " + blockSettings.readNumber("Version"))
        console.log(" ")
        console.log("\"" + blockSettings.readString("DirectorySearch") + "\"")
        if (blockSettings.readString("DirectorySearch") == "Directory") {
            Directory()
        } else if (blockSettings.readString("DirectorySearch") == "Version") {
            Version()
        } else if (blockSettings.readString("DirectorySearch") == "VersionLog") {
            VersionLog()
        } else if (blockSettings.readString("DirectorySearch") == "Files") {
            Files()
        } else if (blockSettings.readString("DirectorySearch") == "Registry") {
            Registry()
        } else if (blockSettings.readString("DirectorySearch") == "Help") {
            Help()
        }
    } else {
        spriteutils.setConsoleOverlay(true)
        console.log("Juno Kernel Version " + blockSettings.readNumber("Version"))
        console.log(" ")
        console.log("Error 001 - No Settings")
        console.log("found with name \"" + blockSettings.readString("DirectorySearch") + "\"")
        pause(100)
        console.log(" ")
        console.log("Available Commands:")
        console.log(Command_List)
        console.log(" ")
        console.log("Juno > ____")
    }
})
function Directory () {
    console.log(" ")
    blockSettings.writeString("MostRecentFile", blockSettings.readString("DirectorySearch"))
    Command_List = [blockSettings.readString("Directory")]
    console.log(blockSettings.list())
    console.log(" ")
    console.log("Juno > ____")
}
function Files () {
    blockSettings.writeString("MostRecentFile", blockSettings.readString("DirectorySearch"))
    console.log(" ")
    console.log("Files:")
    pause(100)
    Setting__Command_List()
    console.log(" ")
    console.log("Juno > ____")
}
function Registry_View () {
    blockSettings.writeString("MostRecentFile", blockSettings.readString("DirectorySearch"))
    Temporary_File_Name = game.askForString("Insert File Name")
    if (blockSettings.exists(Temporary_File_Name)) {
        spriteutils.setConsoleOverlay(true)
        console.log("Juno Kernel Version " + blockSettings.readNumber("Version"))
        console.log(" ")
        console.log("\"" + Temporary_File_Name + "\"")
        console.log(blockSettings.readString(Temporary_File_Name))
        console.log(" ")
        console.log("Juno > ____")
    } else {
        spriteutils.setConsoleOverlay(true)
        console.log("Juno Kernel Version " + blockSettings.readNumber("Version"))
        console.log(" ")
        console.log("Error 001 - No Settings")
        console.log("found with name \"" + Temporary_File_Name + "\"")
        console.log("Create new setting with name \"" + Temporary_File_Name + "\"?")
        pause(2000)
        spriteutils.setConsoleOverlay(false)
        RegistryView001BooleanCreate = game.askForString("Create setting with name \"" + Temporary_File_Name + "\"?")
        if (RegistryView001BooleanCreate == "Yes" || RegistryView001BooleanCreate == "yes") {
            Temporary_File_Data = game.askForString("Insert File Data")
            blockSettings.writeString(Temporary_File_Name, Temporary_File_Data)
            spriteutils.setConsoleOverlay(true)
            console.log("Juno Kernel Version " + blockSettings.readNumber("Version"))
            console.log(" ")
            console.log("\"" + Temporary_File_Name + "\"" + " " + "has Been Created.")
        } else if (RegistryView001BooleanCreate == "No" || RegistryView001BooleanCreate == "no") {
            game.reset()
        } else {
            game.reset()
        }
    }
}
function VersionLog () {
    blockSettings.writeString("MostRecentFile", blockSettings.readString("DirectorySearch"))
    console.log(" ")
    console.log("Kernel Update")
    console.log(" ")
    console.log("- Added Bootloader Setting")
    console.log("- Added Files")
    console.log(" ")
    console.log("Juno > ____")
}
function Registry_Delete () {
    blockSettings.writeString("MostRecentFile", blockSettings.readString("DirectorySearch"))
    Temporary_File_Name = game.askForString("Insert File Name")
    blockSettings.remove(Temporary_File_Name)
    spriteutils.setConsoleOverlay(true)
    console.log("Juno Kernel Version " + blockSettings.readNumber("Version"))
    console.log(" ")
    console.log("Note: Settings that are bundled with Juno Kernel are unable to be deleted.")
    console.log(" ")
    console.log("You Can Delete:")
    console.log("Bootloader [NOT RECOMMENDED]")
    console.log("Custom Settings")
    console.log(" ")
    pause(500)
    if (Temporary_File_Name == "Bootloader") {
        spriteutils.setConsoleOverlay(false)
        pause(500)
        scene.setBackgroundColor(2)
        pause(100)
        spriteutils.setConsoleOverlay(true)
        console.log("Juno Kernel")
        console.log(" ")
        console.log("FATAL ERROR")
        console.log("002 - Key File Deleted")
        console.log(" ")
        console.log("What can I do to fix this?")
        console.log("- Restart the Simulator. ")
        console.log("- Juno will need to reinstall the Bootloader.")
        console.log("- All Settings will be removed.")
        while (true) {
            pause(100)
        }
    } else {
        console.log("Juno > ____")
    }
}
let RegistryView001BooleanCreate = ""
let Command_List: string[] = []
let SystemReinstallVerificationBoolean = false
let Temporary_File_Data = ""
let Temporary_File_Name = ""
if (blockSettings.exists("Bootloader")) {
    Juno()
} else {
    spriteutils.setConsoleOverlay(true)
    console.log("Juno Kernel Installation")
    pause(100)
    console.log("Installing Necessary Settings...")
    console.log(" ")
    console.log("NOTE: Some Settings Might be installed that aren't listed below. Once setup finishes please use the  'Files' Command to view  all settings.")
    pause(500)
    console.log(" ")
    blockSettings.writeString("Registry", "ver0.27.0")
    console.log("Registry {Installed}")
    pause(500)
    blockSettings.writeString("Files", "Settings + Commands")
    console.log("Files {Installed}")
    pause(500)
    blockSettings.writeString("Directory", "Directory")
    console.log("Directory {Installed}")
    pause(500)
    blockSettings.writeNumber("Version", 27)
    console.log("Version {Installed}")
    pause(500)
    console.log(" ")
    console.log("Installing Bootloader...")
    blockSettings.writeNumber("Bootloader", 27)
    console.log("Bootloader has installed!")
    console.log("The Kernel will now")
    console.log("restart...")
    pause(500)
    game.reset()
}
