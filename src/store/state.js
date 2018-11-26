let showCity = '杭州'
try {
  if (localStorage.city) {
    showCity = localStorage.city
  }
} catch (e) {}

export default {
  city: showCity
}
