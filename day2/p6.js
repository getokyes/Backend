const fs = require('fs');

try {
    fs.rmSync("mydir", { recursive: true, force: true });
    console.log("Directory deleted successfully!");
} catch (err) {
    console.error("Error deleting directory:", err);
}

