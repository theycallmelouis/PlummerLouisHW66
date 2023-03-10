const highlightParagraphs = () => {
    // Get all <p> elements
    const paragraphs = document.getElementsByTagName("p");
  
    // Loop through each <p> element and set its style
    for (let i = 0; i < paragraphs.length; i++) {
      paragraphs[i].style.fontWeight = "bold";
      paragraphs[i].style.backgroundColor = "yellow";
    }
  };
  
  // Call the function to highlight all paragraphs
  highlightParagraphs();