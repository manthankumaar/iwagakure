import supabase from './supabase'
import { supabaseUrl } from './supabase'

export const getCabins = async () => {
  let { data, error } = await supabase.from('cabins').select('*')
  if (error) {
    console.log(error)
    throw new Error('Could not load cabins')
  }
  return data
}

export const addEditCabin = async (cabin, id) => {
  const hasImagePath = cabin.image?.startsWith?.(supabaseUrl)
  const imageName = `${Math.random()}-${cabin.image.name}`.replaceAll('/', '')
  //https://ihddmzoujobbswmujplp.supabase.co/storage/v1/object/public/cabin-images/cabin-001.jpg

  const imagePath = hasImagePath
    ? cabin.image
    : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`
  //1. Adding Cabins
  let query = supabase.from('cabins')
  //a). Editing cabins
  if (id) {
    query = query.update({ ...cabin, image: imagePath }).eq('id', id)
  }

  //b). Adding cabins
  if (!id) {
    query = query.insert([{ ...cabin, image: imagePath }])
  }
  const { data, error } = await query.select().single()

  if (error) {
    console.error(error)
    throw new Error('Failed to add a new cabin')
  }
  if (hasImagePath) return data

  const { error: storageError } = await supabase.storage
    .from('cabin-images')
    .upload(imageName, cabin.image)
  if (storageError) {
    await supabase.from('cabins').delete().eq('id', data.id)
    console.error(storageError)
    throw new Error('Filed to upload image')
  }
  return data
}

export const deleteCabin = async (id) => {
  const { data, error } = await supabase.from('cabins').delete().eq('id', id)
  if (error) {
    console.log(error.message)
    throw new Error('unable to delete')
  }
  return data
}
