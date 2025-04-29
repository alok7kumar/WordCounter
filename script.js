
const textarea = document.getElementById('textarea');
const wordCount = document.getElementById('wordCount');
const charCount = document.getElementById('charCount');

textarea.addEventListener('input', updateCounts);       //When triggered, it calls the function updateCounts() to update the stats live.

function updateCounts() {
    const text = textarea.value.trim();         //Get the text the user has typed and trim it (remove starting/ending spaces).
    const wordsArray = text.split(/\s+/).filter(word => word.length > 0);       //Split the text into an array of words using a regular expression /\s+/ (split on one or more spaces). (properly explained below)
                                                                            //Filter out any empty entries (in case of extra spaces).
    wordCount.textContent = wordsArray.length;  //Total number of words
    charCount.textContent = text.length;        //Total number of characters (after trimming)
}

function clearText() {      //Clear the textarea by setting its value to an empty string
    textarea.value = '';
    updateCounts();         //Call updateCounts() to immediately reset the word/char counts
}

function copyText() {
    navigator.clipboard.writeText(textarea.value)       //Copy whatever is inside the textarea to the user's clipboard using navigator.clipboard.writeText
        .then(() => alert('Text copied to clipboard!'))
        .catch(() => alert('Failed to copy text.'));    //If it fails (for example, if clipboard access is denied)
}



// What is /\s+/?

// This is a regular expression (regex).

// / ... / → means it's a regex pattern.

// \s → means any whitespace character (space, tab, newline).

// + → means one or more of the previous thing.

// ✅ So /\s+/ means:

// "Split wherever there is one or more spaces (or tabs or newlines)."



//  What is navigator.clipboard.writeText()?

// It is a modern browser feature to copy text to the user's clipboard.

// ✅ What it does:

// It takes a text (string) and tries to copy it into the clipboard — the place where "Copy-Paste" happens. 
