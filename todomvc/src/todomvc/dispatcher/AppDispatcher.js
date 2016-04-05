/**
 *  dispatcher
 *
 *  オブザーブパターンらしい
 *  Action をトリガーとして，コールバックを呼ぶ
 *  アプリケーションの中心
 *  Action を受け付けて登録されて Callback を実行
 */
import {Dispatcher} from "flux";

export default new Dispatcher();
