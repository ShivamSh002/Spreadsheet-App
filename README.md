/----------------------------Spreadsheet Application-----------------------------------------/


This is a React-based spreadsheet application that mimics the functionality of a traditional spreadsheet. The project includes features like grid rendering, cell editing, search and filter functionality. The state management is handled using Zustand, and the styling is done with Tailwind CSS.


Features:-

1.Grid Rendering: A grid of 1000 cells, arranged in 10 columns and 100 rows, is rendered with each cell being editable.

2,Cell Editing: Users can click on any cell to edit its content. The data is dynamically updated and stored in the application's state.

3.Search and Filter: A search bar allows users to quickly locate specific data within the grid by filtering cells based on the search term.

4.Data Storage: The data entered in each cell is stored in memory using state management. This ensures that the data persists while users interact with the grid, allowing for real-time updates and dynamic changes.


---------------[Instructions on how to run the application locally]------------------

1.Clone the repo in your local.

2.Run command npm install to install node modules, dependencies of this project.

3.After doing above two simple steps , simply run npm star in your local terminal.
 

---------------[Usage Instructions]------------------

Spreadsheet Features:-

1.Editing Cells:

-Click on any cell to edit its content. The data you input will be saved in memory and will remain until you refresh the page.


2.Search and Filter:

-Use the search bar located at the top of the grid to filter the cells based on your search term.

-Cells containing the search term will be highlighted in yellow.

-The grid will only display cells that match the search term, with non-matching cells left empty.

3.Grid Navigation:

-Row numbers are displayed on the left, and column labels (A, B, C, ...) are displayed at the top, mimicking a traditional spreadsheet. 