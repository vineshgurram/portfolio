generateNewQuote = () => {
    let quote = {
        " – Albert Camus": "“ The only way to deal with an unfree world is to become so absolutely free that your very existence is an act of rebellion. ”",
        " – Ralph Ellison": "“ When I discover who I am, I’ll be free. ”",
        "– Richard Bach": "“ If you love someone, set them free. If they come back they’re yours; if they don’t they never were. ”",
        "– Robert A. Heinlein": "“ I am free because I know that I alone am morally responsible for everything I do. I am free, no matter what rules surround me. If I find them tolerable, I tolerate them; if I find them too obnoxious, I break them. I am free because I know that I alone am morally responsible for everything I do. ”",
        "– Geronimo": "“ I was born on the prairies where the wind blew free and there was nothing to break the light of the sun. I was born where there were no enclosures. ”",
        "– Epictetus": "“ No man is free who is not master of himself. ”",
        "– Lewis B. Smedes": "“ To forgive is to set a prisoner free and discover that the prisoner was you. ”",
        "– James A. Garfield": "“ The truth will set you free, but first it will make you miserable. ”",
        "– Johann Wolfgang von Goethe": "“ None are more hopelessly enslaved than those who falsely believe they are free. ”",
        "– John Stuart Mill": "“ A man who has nothing for which he is willing to fight, nothing which is more important than his own personal safety, is a miserable creature and has no chance of being free unless made and kept so by the exertions of better men than himself. ”",
        "– Nelson Mandela": "“ For to be free is not merely to cast off one’s chains, but to live in a way that respects and enhances the freedom of others. ”",
        "– Saul Bellow": "“ Happiness can only be found if you can free yourself of all other distractions. ” ",
        "– Maya Angelou": "“ The truth is, no one of us can be free until everybody is free. ”",
        "– Michelangelo": "“ I saw the angel in the marble and carved until I set him free. ”",
        "– Elmer Davis": " “ This nation will remain the land of the free only so long as it is the home of the brave. ”",
        "– Voltaire": "“ It is difficult to free fools from the chains they revere. ”",
        "– Walter Cronkite": "“ There is no such thing as a little freedom. Either you are all free, or you are not free. ”",
        "– Bill Richardson": "“ Ignorance has always been the weapon of tyrants; enlightenment the salvation of the free. ”",
        "– Anne Sullivan": "“ Every renaissance comes to the world with a cry, the cry of the human spirit to be free. ”",
        "– Liu Xiaobo": "“ Free expression is the base of human rights, the root of human nature and the mother of truth. To kill free speech is to insult human rights, to stifle human nature and to suppress truth. ”",
        "– Charles Kingsley": "“ There are two freedoms – the false, where a man is free to do what he likes; the true, where he is free to do what he ought. ”",
        "– Aleksandr Solzhenitsyn": "“ You only have power over people so long as you don’t take everything away from them. But when you’ve robbed a man of everything, he’s no longer in your power – he’s free again. ”",
        "– Rosamund Pike": "“ I look my best when I’m totally free, on holiday, walking on the beach. ”",
        "– Samuel Adams": "“ The natural liberty of man is to be free from any superior power on Earth, and not to be under the will or legislative authority of man, but only to have the law of nature for his rule. ”",
    }

    let quoteKeys = Object.keys(quote);
    let randomIndex = Math.floor(Math.random() * quoteKeys.length);
    document.querySelector("#quote").innerHTML = quote[quoteKeys[randomIndex]];
    document.querySelector("#author-name").innerHTML = quoteKeys[randomIndex];
}
