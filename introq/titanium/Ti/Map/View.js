define(["Ti/_/declare","Ti/_/Evented","Ti/_/Map/Google","Ti/App/Properties"],function(e,a,t,i){var n=i.getString("ti.map.backend");return e("Ti.Map.View",[a,n?require(n):t])});