
async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/Gady359/Curriculo-Responsivo/main/data/profile.json';
    const response = await fetch(url)
    const profileData = await response.json()
    return profileData
}