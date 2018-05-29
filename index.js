"use strict";

/**
 * true for plaintext, false for ssml
 */
class OutputSpeech {
    constructor(isPlainText, content) {
        if(isPlainText) {
            this.type = "PlainText";
            this.text = content;
        }
        else {
            this.type = "SSML";
            this.ssml = content;
        }
    }
    getType() {
        return this.type;
    }
    getContents() {
        return this.type === "PlainText" ? this.text : this.ssml;
    }
}

/**
 * Used to be inherited by the other types of card however you can use it to custom create one if you really want
 */
class Card {
    constructor(type) {
        this.type = type;
    }
    getType() {
        return this.type;
    }
}
exports.Card = Card;

/**
 * A card that contains a title and plain text content
 */
class SimpleCard extends Card {
    /**
     * @param title of card
     * @param text of card
     */
    constructor(title, text) {
        super("Simple");
        this.title = title;
        this.text = text;
    }
    getTitle() {
        return this.title;
    }
    getText() {
        return this.text;
    }
}
exports.SimpleCard = SimpleCard;

