module.exports = class Itunes
    TAG = "Itunes"
    constructor: (arg) ->

    @getItunesData = (url,callback,errorCallback) ->  
        console.log "#{TAG} getItunesData #{url}"
        client = Ti.Network.createHTTPClient(
          
          onload: (e)->
            console.log "#{TAG} onload #{@responseText}"
            data = getItunesDataParse @responseText
            callback data

          onerror: errorCallback
          timeout: 5000 # in milliseconds
        )
        client.open "GET", url
        client.send()

    getItunesDataParse = (text)->
        #json化
        json = JSON.parse text
        data = json.results
        #TODO データのうち、無料のものを抽出 underscoreで
        data = _.filter data,(obj)->
          obj.price is 0
        unless ENV_PRODUCTION then Ti.API.debug "1:#{JSON.stringify data}"
        #TODO データを、アップデート日付順にソート underscoreで
        data = _.sortBy(data, (item) ->
          Number(item.releaseDate)
        )
        unless ENV_PRODUCTION then Ti.API.debug "2:#{JSON.stringify data}"
        #TODO 自分のアプリIDは除外 bundleId
        data = _.filter data,(obj)->
          obj.bundleId isnt Ti.App.id
        unless ENV_PRODUCTION then Ti.API.debug "3:#{JSON.stringify data}"
        data