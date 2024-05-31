//functionn to set title
function setTitle(newTitle)
{
    const titleElement = document.getElementById('title');
    titleElement.textContent = newTitle;
}
//Function for description.
function setDescription(newDescription)
{
    const descriptionElement = document.getElementById('description');
    descriptionElement.textContent = newDescription;

}

//Function to set background color.
function setBackgroundcolor(color)
{
    document.body.style.backgroundcolor = color;
}
//Function to set the font color.
function setFontColor(color)
{
    document.body.style.color = color;
    const allElements = document.querySelectorAll('*');
    allElements.forEach(element => {element.style.color = color});

}
//Function to set the Theme
function setTheme(theme)
{
    if(theme === 'dark')
        { 
            document.body.classList.add('dark-theme');
            document.body.classList.remove('light-theme');
        }
          else if(theme === 'light')
    { 
        document.body.classList.add('light-theme');
        document.body.classList.remove('dark-theme');
    }
}