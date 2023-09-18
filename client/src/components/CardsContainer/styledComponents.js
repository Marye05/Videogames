import styled from 'styled-components'

export const StyledContainer = styled.div`
    background-image: url('https://p4.wallpaperbetter.com/wallpaper/915/148/63/1242x2208-px-galaxy-portrait-display-space-vertical-video-games-zelda-hd-art-wallpaper-preview.jpg');
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    justify-content: space-around;
    min-height: 100vh;
    .cards {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
    .filter button {
        color: #ffffff8f;
        background-color: #630380 ;
        border-radius: 5px;
        margin: 5px 3px;
        font-size: 18px;
    }
    .filter button:hover {
        color: #ffffffca;
        cursor: pointer;
    }
    .pagination button {
        color: #ffffff8f;
        background-color: #630380 ;
        border-radius: 50%;
        margin: 5px 3px;
        font-size: 18px;
    }
    .pagination button:hover {
        color: #ffffffca;
        cursor: pointer;
    }
`;