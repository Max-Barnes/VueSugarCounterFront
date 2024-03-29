<template>
  <div class="body-bag">
    <div class="container">
      <div class="title-card">
        <h1>How Much Sugar Is In Your Favorite Fast Food Items?</h1>
      </div>
      <div class="searchbox">
        <div class="search">
          <input type="text" placeholder="Search the sugar database!" />
        </div>
      </div>
      <div class="searchitems">
        <div class="item" v-for="each in searchItems" :key="each.id">
          <div class="iteminfo">
            <div class="name">{{ each.name }}</div>
            <div class="sugar">{{ each.sugar }}g of sugar</div>
          </div>
          <div class="addbutton">+</div>
        </div>
      </div>
      <div class="section-two">
        <div class="custom">
          <h2>Add a Custom Item</h2>
          <form v-on:submit.prevent="saveNewItem">
            <div>
              <label for="name">Name: </label>
              <input
                id="name"
                type="text"
                name="name"
                placeholder="Add Food Name Here!"
                required
                v-model="newItem.name"
              />
            </div>
            <div>
              <label for="sugars">Grams of Sugar: </label>
              <input
                id="sugars"
                type="number"
                name="sugars"
                placeholder="0"
                min="0"
                required
                v-model="newItem.sugar"
              />
            </div>
            <button type="submit" id="submitter">Add To List</button>
          </form>
        </div>

        <div class="list-to-math">
          <!-- come back to create template-->
          <h2>List of Items</h2>
          <div class="hateful-div">
            <div class="item-header">
              <p>Food Name</p>
              <p>Sugar</p>
              <button @click="removeAllItems()">Remove All Items</button>
            </div>
            <div class="row-template" v-for="item in listOfItems" v-bind:key="item.id">
              <span>{{ item.name }}</span>
              <span>{{ gramOrGrams(item.sugar) }}</span>
              <span><button @click="removeItemFromList(item.id)">Remove</button></span>
            </div>
          </div>
        </div>
        <div class="info"></div>
      </div>
    </div>
    <div class="information-area">
      <div class="total">
        <h1>Total Sugar From Item of List</h1>
        <h3>The sugar from the items in the list is equal to: {{ howManyCups }}</h3>
        <div id="cup-with-pointer">
          <div class="visual-aid">
            <img class="cup" src="../../assets/img/Copa.png" alt="measuring cup" />
          </div>
          <div class="scrollbox">
            <img
              class="pointer"
              src="../../assets/img/pointer.png"
              alt="pointer"
              :style="{ paddingBottom: scrollValue + 'px' }"
            />
          </div>
          <div class="extra-cups">
            <img
              :key="index"
              src="../../assets/img/copa.png"
              alt="additional-cup"
              v-for="index in extraCups"
            />
          </div>
        </div>

        <h1>
          {{ totalSugars }}g of sugar is {{ percentOfDailyLimit }} of the recommended daily limit
          (30g)
        </h1>
        <div class="funny-section">
          <h1>
            After a year eating the items in the list daily you would have eaten
            {{ totalSugars * 365 }}g of sugar this year
          </h1>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      searchBox: '',
      listOfItems: [
        {
          id: 0,
          name: 'Mcdonalds Milkshake WOO',
          sugar: 1
        },
        {
          id: 1,
          name: 'squeeeeeeeeeee',
          sugar: 10
        }
      ],
      searchItems: [
        {
          id: 0,
          name: 'foo',
          sugar: 0
        }
      ],
      newItem: [
        {
          name: '',
          sugar: 0
        }
      ],
      nextListId: 2,
      maxScrollValue: 160,
      funnyStuff: [
        {
          id: 1,
          name: 'Car',
          sugar: 100000
        },
        {
          id: 2,
          name: 'Sugar Cube',
          sugar: 4
        }
      ],
      sugarInCar: 100000,
      sugarInCube: 4
    }
  },

  computed: {
    totalSugars() {
      let total = 0
      this.listOfItems.forEach((element) => {
        total += element.sugar
      })
      return total
    },

    scrollValue() {
      let val = this.totalSugars % 200
      return val / 2
    },
    extraCups() {
      return Math.floor(this.totalSugars / 200)
    },
    howManyCups() {
      return this.totalSugars / 200 + ' cups of sugar'
    },
    percentOfDailyLimit() {
      let daily = (this.totalSugars / 30) * 100

      return daily.toFixed(2) + '%'
    },
    percentOfCar() {
      let daily = (this.totalSugars * 365) / this.sugarInCar

      return daily.toFixed(2) + '%'
    },
    numberOfCubes() {
      return Math.floor(this.totalSugars / this.sugarInCube)
    },
    didYouEatTheCar() {
      if (this.percentOfCar >= 1) {
        return "You would've eaten a car made of sugar this year!"
      }
      return 'You would not have eaten a car made of sugar this year!'
    }
  },

  methods: {
    gramOrGrams(numba) {
      if (numba === 1) {
        return numba + ' gram of sugar'
      }
      return numba + ' grams of sugar'
    },
    saveNewItem() {
      this.newItem.id = this.getNextListId()
      this.listOfItems.unshift(this.newItem)

      this.newItem = {
        name: '',
        sugar: 0
      }
    },
    getNextListId() {
      let steve = this.nextListId

      this.nextListId += 1
      return steve
    },
    removeItemFromList(id) {
      let removed = this.listOfItems.find((item) => item.id === id)

      this.listOfItems.splice(this.listOfItems.indexOf(removed), 1)
    },
    removeAllItems() {
      this.listOfItems = []
    }
  }
}
</script>

<style>
body {
  background-color: #008080;
}
.container {
  margin-left: 2%;
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

.item-header {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background-color: #ffffff;
  width: 100%;
  border-bottom: 2px solid #808080;
}

.row-template {
  display: flex;
  background-color: #ffffff;
}

.row-template > span {
  padding-top: 5%;
  min-height: 75px;
  max-height: 75px;
  min-width: 125px;
  max-width: 125px;
  margin: auto;
}

.row-template:nth-child(odd) {
  background-color: #bdb8b8;
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
  min-height: 400px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  border-right: 1px solid #808080;
  overflow-y: scroll;
  max-height: 400px;
}

.item {
  display: flex;
  justify-content: space-around;
  align-items: center;
  border: 1px solid #808080;
  max-height: 100px;
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

.hateful-div {
  width: 100%;
  margin: auto;
}
.body-bag {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.information-area {
  background-color: #bdb8b8;
  margin-left: 2%;
  margin-right: 2%;
  height: auto;
  width: 60%;
}
.visual-aid {
  min-height: 200px;
  max-height: 200px;
  max-width: 250px;
  height: 200px;
  width: 50%;
  position: relative;
}

.cup {
  width: 100%;
  height: 100%;
  transform: scale(-1, 1);
}

.pointer {
  width: 30px;
  height: 30px;
}

.scrollbox {
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  min-height: 200px;
  max-height: 200px;
  width: 10%;
  overflow: hidden;
}

#cup-with-pointer {
  display: flex;
  min-height: 200px;
  max-height: 200px;
}
form {
  background-color: #dbe9e9;
}
.extra-cups > img {
  width: 100px;
  height: 100px;
}
h3 {
  font-size: 2rem;
}
h1 {
  font-size: 3rem;
}
</style>
