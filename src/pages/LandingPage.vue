<template>
  <!-- Hero Section -->
  <div>
    <div class="absolute top-0 left-0 w-full h-[600px] flex items-center z-10 text-white pl-12 lg:pl-20 hero">
      <div class="absolute inset-0 z-20 bg-gradient-to-r from-black via-black to-transparent opacity-50"
        aria-hidden="true"></div>
      <div class="z-30">
        <h1 class="text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight drop-shadow-md">
          <span class="block">Explore The Heart</span>
          <span class="block">Of Malta: Spinola Bay</span>
        </h1>
        <p class="mt-4 text-xl sm:text-2xl lg:text-3xl drop-shadow-md">Immerse in Malta's stunning beauty.</p>
      </div>
    </div>
    <!-- Activities Section -->
    <div class="pt-[600px]">
      <h2 class="text-2xl sm:text-3xl lg:text-5xl font-bold mt-4 text-black px-12 lg:px-20">Things to Do in Malta</h2>
    </div>
    <div class="px-12 lg:px-20">
      <h3 class="text-xl sm:text-2xl lg:text-3xl font-bold mt-6 text-black">Top Activities</h3>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-auto max-w-7xl p-12 lg:p-20">
        <div v-for="(activity, index) in activities.slice(0, 4)" :key="activity.id"
          class="card bordered bg-base-100 shadow-md rounded-md overflow-hidden">
          <img :src="getActivityImageUrl(activity)" alt="Activity Image"
            class="w-full object-cover h-48 rounded-t-md transition-transform duration-300 hover:scale-105">
          <div class="card-body p-4">
            <p class="text-sm uppercase tracking-wide text-gray-600 mb-1">{{
              activity.attributes?.category?.data?.attributes?.name || 'Category Not Available' }}</p>
            <h2 class="text-xl font-bold mb-2">{{ activity.attributes?.title || 'Title Not Available' }}</h2>
          </div>
        </div>
        <div v-for="index in (4 - activities.length)" :key="index"
          class="card bordered bg-base-100 p-4 shadow-md rounded-md opacity-50 overflow-hidden">
          <img src="https://via.placeholder.com/150" alt="Placeholder Image"
            class="w-full object-cover h-48 mb-4 rounded-t-md transition-transform duration-300 hover:scale-105">
          <div class="card-body p-4">
            <h2 class="text-xl font-bold mb-2">Placeholder</h2>
          </div>
        </div>
      </div>
    </div>
    <!-- Discover The Island Section -->
    <div class="px-12 lg:px-20">
      <h3 class="text-xl sm:text-2xl lg:text-3xl font-bold mt-6 text-black">Discover The Island</h3>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">
        <div v-for="(city, index) in cities" :key="city.id"
          class="bg-white shadow-md rounded-md overflow-hidden w-64 h-64">
          <img :src="getCityImageUrl(city)" alt="City Image" class="w-full h-2/3 object-cover">
          <div class="p-4 h-1/3 flex flex-col justify-between">
            <h3 class="text-lg font-bold mb-2">{{ city.attributes?.name || 'City Not Available' }}</h3>
            <p class="text-xs text-gray-600">Experience the vibrant city life.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const API_URL = import.meta.env.VITE_API_URL || 'https://islandhopperco.com/api'
const BASE_URL = import.meta.env.VITE_BASE_URL || 'https://islandhopperco.com'

const activities = ref([])
const cities = ref([])

onMounted(async () => {
  try {
    const activityResponse = await fetch(`${API_URL}/activities?populate=images,category`, {
      headers: {
        'Content-Type': 'application/json',
      },
    })

    const cityResponse = await fetch(`${API_URL}/cities?populate=images`, {
      headers: {
        'Content-Type': 'application/json',
      },
    })

    const activityData = await activityResponse.json()
    const cityData = await cityResponse.json()

    activities.value = activityData.data || []
    cities.value = cityData.data || []
  } catch (error) {
    console.error('Failed to fetch data', error)
  }
})

// Function to get the image URL from the activity
const getActivityImageUrl = (activity) => {
  const images = activity.attributes?.images?.data

  if (images && images.length > 0) {
    const url = images[0].attributes?.formats?.medium?.url
    return url ? `${BASE_URL}${url}` : ''
  }

  return ''
}

// Function to get the image URL from the city
const getCityImageUrl = (city) => {
  const image = city.attributes?.image

  if (image && image.data && image.data.length > 0) {
    const url = image.data[0].attributes?.url
    return `${BASE_URL}/${url}` || ''
  }

  return ''
}





</script>

<style scoped>
.hero {
  background-image: url('~/assets/spinola_bay.webp');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>