Window_BattleLog.prototype.messageSpeed = function() {
    return 1;
};

Sprite_Animation.prototype.setupRate = function() {
    this._rate = 1;
};

Sprite_Battler.prototype.startMove = function(x, y, duration) {
    if (this._targetOffsetX !== x || this._targetOffsetY !== y) {
        this._targetOffsetX = x;
        this._targetOffsetY = y;
        this._movementDuration = duration/4;
        if (duration === 0) {
            this._offsetX = x;
            this._offsetY = y;
        }
    }
};

Window_BattleLog.prototype.animationBaseDelay = function() {
    return 0;
};

Window_BattleLog.prototype.animationNextDelay = function() {
    return 4;
};

Window_BattleLog.prototype.wait = function() {
    //this._waitCount = this.messageSpeed();
};

Sprite_Battler.prototype.setupDamagePopup = function() {
    if (this._battler.isDamagePopupRequested()) {
        if (this._battler.isSpriteVisible()) {
            var sprite = new Sprite_Damage();
            sprite.x = this.x + this.damageOffsetX();
            var sy = (this._damages.length-1) * -24;
            sprite.y = this.y + this.damageOffsetY()// + sy;
            sprite.setup(this._battler);
            this._damages.push(sprite);
            this.parent.addChild(sprite);
            //this._battler._popupIndex++;
        }
        this._battler.clearDamagePopup();
        this._battler.clearResult();
    }
};