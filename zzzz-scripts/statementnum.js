function statementnum(tp) {
    // Check if the note is an existing one by comparing the creation date with the current date
    if (tp.config.run_mode == 1) {
        // Check if the note title matches the regex pattern '^\d{3}'
        let regexPattern = /^\d{3}/;
        if (regexPattern.test(String(tp.file.title))) {
            // Extract the matched value
            return `statement-num: "${String(tp.file.title)}"`;
        }
    }
    return `statement-num: `; // Return empty string if conditions aren't met
}
module.exports = statementnum;