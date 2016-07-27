//
//  リージョンコモン ver1.00
//
// author yana
//

var Imported = Imported || {};
Imported['RegionCommon'] = 1.00;
/*:
 * @plugindesc ver1.00/特定のIDリージョンに触れた時、コモンイベントを予約します。
 * @author Yana
 *
 * @help ------------------------------------------------------
 * 使用方法
 * ------------------------------------------------------
 *
 * ------------------------------------------------------
 * 利用規約
 * ------------------------------------------------------
 * 使用に制限はありません。商用、アダルト、いずれにも使用できます。
 * 二次配布も制限はしませんが、サポートは行いません。
 * 著作表示は任意です。行わなくても利用できます。
 * 要するに、特に規約はありません。
 * バグ報告や使用方法等のお問合せはネ実ツクールスレ、または、Twitterにお願いします。
 * https://twitter.com/yanatsuki_
 * 素材利用は自己責任でお願いします。
 * ------------------------------------------------------
 * 更新履歴:
 * ver1.00:
 * 公開
 */
(function() {
    ////////////////////////////////////////////////////////////////////////////////////

    var parameters = PluginManager.parameters('RegionCommon');

    ////////////////////////////////////////////////////////////////////////////////////

    var __GPlayer_update = Game_Player.prototype.update;
    Game_Player.prototype.update = function(sceneActive) {
        __GPlayer_update.call(this, sceneActive);
        if (!$gameMap._interpreter.isRunning()) {
            var ri = this.regionId();
            if (ri > 0 && ri !== $gameTemp._lastRegionCommonId) {
                $gameTemp._lastRegionCommonId = ri;
                if ($dataMap.meta['RegionCommon' + ri]) {
                    $gameTemp.reserveCommonEvent(Number($dataMap.meta['RegionCommon' + ri]));
                } else if ($dataMap.meta['リージョンコモン' + ri]) {
                    $gameTemp.reserveCommonEvent(Number($dataMap.meta['リージョンコモン' + ri]));
                }
            }
        }
    };

    ////////////////////////////////////////////////////////////////////////////////////

}());