<template>
<div class="container">
      
      <div class="title-card">
        <h1>How Much Sugar Is In Your Favorite Fast Food Items?</h1>
        
        <button>Calculate!</button>
        
      </div>
      <div class="searchbox">
        <div class="search">
        <input type="text" placeholder="Search the sugar database!">
        </div>
      </div>
      <div class="searchitems">
        <div class="item">
          <div class="iteminfo">
            <div class="name">Hope's McChicken</div>
            <div class="sugar">6g of sugar</div>
          </div>
          <div class="addbutton">+</div>
        </div>
      <div class="item">
        <div class="iteminfo"> 
          <div class="name">McDonald's McChicken</div>
          <div class="sugar">6g of sugar</div>
        </div>
          <div class="addbutton">+</div>
        </div>
      <div class="item"> 
        <div class="iteminfo">
          <div class="name">McDonald's McChicken</div>
          <div class="sugar">6g of sugar</div>
        </div>
          <div class="addbutton">+</div>
        </div>
      </div>
  <div class="custom">
    <h2> Add a Custom Item </h2>
      <div>
        <label for="name">Name: </label>
        <input id ="name" type="text" name="name" placeholder="Add Food Name Here!" required>
      </div>
      <div>
        <label for="sugars">Grams of Sugar: </label>
        <input id="sugars" type="number" name="sugars" placeholder="0" min="0" required>
      </div>
        <button type="submit" id="submitter">Add To List</button>
  </div> 
  <div class="list-to-math"> <!-- come back to create template-->
        <h2>List of Items</h2>
        <table>
          <thead>
            <tr>
              <th>Food Name</th>
              <th>Sugar</th>
              <th>Remove Item</th>
            </tr>
          </thead>
          <tbody id="table-body">
          </tbody>
        </table> 
        <template id="row-template">
            <tr> 
              <th class="food-name">Click the "Remove Item" box to close!</th>
              <td class="sugar-in-grams">0g</td>
              <td class="removebutton">Remove</td>
            </tr>
        </template>
      </div>
      <div class="info">
       
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
         Dolorem cupiditate blanditiis praesentium quibusdam vel laborum 
         alias dicta beatae amet ratione ipsum nihil distinctio, maxime commodi, 
         possimus, odit cum culpa omnis.
      </p>
      </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            searchBox: '',
            addName: '',
            addSugars: '',
            listOfItems: [],

        },
    },

    computed: {

    },

    methods: {


    }

}
</script>

<style>
body {
    background-color: #008080;
}
.container {
    margin: auto;
    width: fit-content;
}
.header {
    display: flex;
    justify-content: space-between;
    /* margin-bottom: 10%; */
    align-items: center;
    /* padding-top: 5%; */
}
.title-card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background-color: #dbe9e9;
    border-radius: 5px;
}
.header > a {
    background: url(img/gill.jpg) no-repeat;
    max-width: 100px;
    max-height: 100px;
    font-size: 20px;
}

.search {
    background-color: #dbe9e9;

    margin-bottom: 1%;
    border-radius: 2px;
    min-height: 30px;
    display: flex;
}

.search > input {
    width: 100%;
}

.title-card > span {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
}



table {
    background-color: #ffffff;
    border-collapse: collapse;
    width: 100%;
}

tr:nth-child(even) {
    background-color: #bbc5c5;
}

td:last-child:hover {
    background-color: #ff0303bd;
    font-weight: 900;
    cursor: pointer;
}

th, td {
    border-right: 2px solid #808080;
    border-bottom: 2px solid #808080;
    text-align: right;
    padding: 2rem;
}
th {
    text-align: center;
}

.title-card button {
    background-color: #bdb8b8;
    border-radius: 10px;
    padding: 10% 0 10% 0;
    max-height: fit-content;
    width: 50%;
    padding: 0;
    font-size: 3rem;
    cursor: pointer;
}

.searchitems {
    background-color: #dbe9e9;
    border-radius: 4px;

    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    border-right: 1px solid #808080;

}

.item {
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-right: 1px solid #808080;

}

.info {
    display: flex;
    flex-wrap: nowrap;

}
h2 {
    color: #dbe9e9;
}

.addbutton {
    font-weight: 900;
    font-size: 3rem;
    cursor: pointer;
}
</style>