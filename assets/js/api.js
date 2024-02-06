async function fetchProfileData(){
    const url ='https://raw.githubusercontent.com/Gady359/Curriculo-Responsivo/main/data/profile.json'
    const fetching = await fetch(url)
    return await fetching.json()
}