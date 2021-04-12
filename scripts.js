var enabled = false;


function generateAura()
{
    document.body.querySelectorAll('p').forEach(function(node) {
        txt = node.innerText;
    
        if (txt) {
            (myFunction = function() {
                var newText = "";
                for(var i=0, l=txt.length; i<l; i++)
                {
                    newText += '<span class="aura-highlight" style="color:#'+getColor(txt.charAt(i))+' !important;">'+txt.charAt(i)+'</span>';
                }
                node.innerHTML = newText;
            })();
        }
    });
}

function removeAura()
{
    document.querySelectorAll('.aura-highlight').forEach(e => e.remove());
}

function getColor(letter)
{
    // These colors might not be optimized.
    if (letter === "a" || letter === "A") {
        return "FF1212";
    }
    else if (letter === "B" || letter === "b") {
        return "FF9900";
    }
    else if (letter === "C" || letter === "c") {
        return "F5EC05";
    }
    else if (letter === "D" || letter === "d") {
        return "45E368";
    }
    else if (letter === "E" || letter === "e") {
        return "3870FF";
    }
    else if (letter === "F" || letter === "f") {
        return "923DC6";
    }
    else if (letter === "G" || letter === "g") {
        return "FF1212";
    }
    else if (letter === "H" || letter === "h") {
        return "FF9900";
    }
    else if (letter === "I" || letter === "i") {
        return "F5EC05";
    }
    else if (letter === "J" || letter === "j") {
        return "45E368";
    }
    else if (letter === "K" || letter === "k") {
        return "3870FF";
    }
    else if (letter === "L" || letter === "l") {
        return "923DC6";
    }
    else if (letter === "M" || letter === "m") {
        return "FF1212";
    }
    else if (letter === "N" || letter === "n") {
        return "FF9900";
    }
    else if (letter === "O" || letter === "o") {
        return "F5EC05";
    }
    else if (letter === "P" || letter === "p") {
        return "45E368";
    }
    else if (letter === "Q" || letter === "q") {
        return "3870FF";
    }
    else if (letter === "R" || letter === "r") {
        return "923DC6";
    }
    else if (letter === "S" || letter === "s") {
        return "FF1212";
    }
    else if (letter === "T" || letter === "t") {
        return "FF9900";
    }
    else if (letter === "U" || letter === "u") {
        return "F5EC05";
    }
    else if (letter === "V" || letter === "v") {
        return "45E368";
    }
    else if (letter === "W" || letter === "w") {
        return "3870FF";
    }
    else if (letter === "X" || letter === "x") {
        return "923DC6";
    }
    else if (letter === "Y" || letter === "y") {
        return "FF1212";
    }
    else if (letter === "Z" || letter === "z") {
        return "FF9900";
    }
    else if (letter === "0" || letter === "z") {
        return "FF1212";
    }
    else if (letter === "1" || letter === "z") {
        return "FF9900";
    }
    else if (letter === "2" || letter === "z") {
        return "F5EC05";
    }
    else if (letter === "3" || letter === "z") {
        return "45E368";
    }
    else if (letter === "4" || letter === "z") {
        return "3870FF";
    }
    else if (letter === "5" || letter === "z") {
        return "923DC6";
    }
    else if (letter === "6" || letter === "z") {
        return "FF1212";
    }
    else if (letter === "7" || letter === "z") {
        return "FF9900";
    }
    else if (letter === "8" || letter === "z") {
        return "F5EC05";
    }
    else if (letter === "9" || letter === "z") {
        return "45E368";
    }
}

function buttonPressed() {
    if (enabled == true) {
        enabled = false;
        removeAura();
    } else {
        enabled = true;
        generateAura();
    }
}

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      if (request.action == "buttonPressed") {
        buttonPressed();
        sendResponse({enabled: enabled});
      }
      return true;
    }
);