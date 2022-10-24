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
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    spriteutils.setConsoleOverlay(false)
    blockSettings.writeString("DirectorySearch", game.askForString("Insert Command"))
    if (blockSettings.exists(blockSettings.readString("DirectorySearch"))) {
        spriteutils.setConsoleOverlay(true)
        console.log("Juno Kernel Version " + blockSettings.readNumber("Version"))
        console.log(" ")
        console.log("\"" + blockSettings.readString("DirectorySearch") + "\"")
        if (blockSettings.readString("DirectorySearch") == "Directory") {
            console.log(" ")
            Command_List = [blockSettings.readString("Directory")]
            console.log(blockSettings.list())
            console.log(" ")
            console.log("Juno > ____")
        } else if (blockSettings.readString("DirectorySearch") == "Version") {
            console.log(" ")
            console.log("This version is up ")
            console.log("to date.")
            console.log(" ")
            console.log("Juno > ____")
        } else if (blockSettings.readString("DirectorySearch") == "VersionLog") {
            console.log(" ")
            console.log("Kernel Update")
            console.log(" ")
            console.log("- Added Bootloader Setting")
            console.log("- Added Files")
            console.log(" ")
            console.log("Juno > ____")
        } else if (blockSettings.readString("DirectorySearch") == "Files") {
            console.log(" ")
            console.log("Files:")
            pause(100)
            Setting__Command_List()
            console.log(" ")
            console.log("Juno > ____")
        } else if (blockSettings.readString("DirectorySearch") == "Registry") {
            console.log(" ")
            console.log("Files:")
            Setting__Command_List()
            console.log("Add File (?)")
            console.log(" ")
            console.log("Juno > Registry > ____")
            pause(5000)
            spriteutils.setConsoleOverlay(false)
            blockSettings.writeString("DirectorySearch", game.askForString("Add File (?)"))
            if (blockSettings.readString("DirectorySearch") == "Yes") {
                Temporary_File_Name = game.askForString("Insert File Name")
                Temporary_File_Data = game.askForString("Insert File Data")
                blockSettings.writeString(Temporary_File_Name, Temporary_File_Data)
                spriteutils.setConsoleOverlay(true)
                console.log("Juno Kernel Version " + blockSettings.readNumber("Version"))
                console.log(" ")
                console.log("\"" + blockSettings.readNumber(Temporary_File_Name) + "\"" + "" + "has Been Created.")
            } else if (blockSettings.readString("DirectorySearch") == "No") {
                game.reset()
            } else if (blockSettings.readString("DirectorySearch") == "View") {
                spriteutils.setConsoleOverlay(true)
                console.log("Juno Kernel Version " + blockSettings.readNumber("Version"))
                console.log(" ")
                Setting__Command_List()
                console.log(" ")
                console.log("Commands")
            } else if (blockSettings.readString("DirectorySearch") == "Delete") {
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
            } else {
                Registry001()
            }
        }
    } else {
        spriteutils.setConsoleOverlay(true)
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
function Juno () {
    blockSettings.writeNumber("Version", 21)
    blockSettings.writeString("VersionLog", "Version 0021 - GUI Update")
    SystemReinstallVerificationBoolean = false
    blockSettings.writeString("Directory", "Directory")
    blockSettings.writeString("Directory.Search", "DirectorySearch")
    blockSettings.writeString("Files", "Settings + Commands")
    blockSettings.writeString("Registry", "ver0.21.1")
    Command_List = [
    "Directory",
    "Version",
    "VersionLog",
    "Files",
    "Registry"
    ]
    GUI()
}
function GUI () {
    spriteutils.setConsoleOverlay(true)
    pause(100)
    console.log("Juno Kernel Version " + blockSettings.readNumber("Version"))
    pause(100)
    console.log(" ")
    pause(500)
    console.log("Data Used: " + blockSettings.list().length + " Settings")
    console.log("" + Command_List.length + " Command(s)")
    pause(500)
    if (Command_List.length > 0) {
        pause(500)
        console.log(" ")
        console.log(Command_List)
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
let SystemReinstallVerificationBoolean = false
let Temporary_File_Data = ""
let Temporary_File_Name = ""
let Command_List: string[] = []
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
    blockSettings.writeString("Registry", "ver0.21.1")
    console.log("Registry {Installed}")
    pause(500)
    blockSettings.writeString("Files", "Settings + Commands")
    console.log("Files {Installed}")
    pause(500)
    blockSettings.writeString("Directory", "Directory")
    console.log("Directory {Installed}")
    pause(500)
    blockSettings.writeNumber("Version", 21)
    console.log("Version {Installed}")
    pause(500)
    console.log(" ")
    console.log("Installing Bootloader...")
    blockSettings.writeNumber("Bootloader", 21)
    console.log("Bootloader has installed!")
    console.log("The Kernel will now")
    console.log("restart...")
    pause(500)
    game.reset()
}
