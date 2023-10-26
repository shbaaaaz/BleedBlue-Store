const getCategoryFilter = (categoryParam) => {
  if (categoryParam === 'men') return document.querySelector('#bb-chk-men')
  else if (categoryParam === 'women')
    return document.querySelector('#bb-chk-women')
  else return document.querySelector('#bb-chk-kids')
}

// Checking the query string parameters on page load to select the category

window.addEventListener('load', () => {
  const categoryParam = new URLSearchParams(window.location.search).get(
    'category'
  )
  if (categoryParam) {
    const selectedCategory = getCategoryFilter(categoryParam)
    selectedCategory.checked = true
  }
})

// dynamically displaying price range on range change

const priceFilter = document.querySelector('#bb-price-range')
const priceValue = document.querySelector('#bb-price-value')

const setPriceRangeValue = () => {
  priceValue.innerHTML = `<span> Rs. 500 - Rs. ${priceFilter.value}</span>`
}

document.addEventListener('DOMContentLoaded', setPriceRangeValue)
priceFilter.addEventListener('input', setPriceRangeValue)

// clearning product filters on filter clear button click
const clearFilterButton = document.querySelector('#bb-btn-clearFilter')

const clearFilter = () => {
  const menCategory = document.querySelector('#bb-chk-men')
  const womenCategory = document.querySelector('#bb-chk-women')
  const kidsCategory = document.querySelector('#bb-chk-kids')
  const sortByLowToHigh = document.querySelector('#bb-rd-lowToHigh')

  priceFilter.value = '4000'
  setPriceRangeValue()
  menCategory.checked = false
  womenCategory.checked = false
  kidsCategory.checked = false
  sortByLowToHigh.checked = true
}

clearFilterButton.addEventListener('click', clearFilter)

// opening sidenav on filter button click for mobile viewport
const filterSidebar = document.querySelector('#bb-filter-sidebar')
const productFilterButton = document.querySelector('#bb-btn-filter')
const productFilterCloseButton = document.querySelector('#bb-btn-filter-close')

const openSideNav = () => {
  filterSidebar.classList.add('show')
}

const closeSideNav = () => {
  filterSidebar.classList.remove('show')
}

productFilterButton.addEventListener('click', openSideNav)
productFilterCloseButton.addEventListener('click', closeSideNav)
