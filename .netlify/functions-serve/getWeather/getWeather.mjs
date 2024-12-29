
import {createRequire as ___nfyCreateRequire} from "module";
import {fileURLToPath as ___nfyFileURLToPath} from "url";
import {dirname as ___nfyPathDirname} from "path";
let __filename=___nfyFileURLToPath(import.meta.url);
let __dirname=___nfyPathDirname(___nfyFileURLToPath(import.meta.url));
let require=___nfyCreateRequire(import.meta.url);


// netlify/functions/getWeather.mjs
var getWeather_default = async (req) => {
  const params = new URL(req.url).searchParams;
  const location = params.get("location");
  const apikey = "7eb57afc13ef435abae92509242912";
  const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${apikey}&q=${location}&aqi=no`);
  const data = await response.json();
  return new Response(JSON.stringify(data));
};
export {
  getWeather_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibmV0bGlmeS9mdW5jdGlvbnMvZ2V0V2VhdGhlci5tanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImV4cG9ydCBkZWZhdWx0IGFzeW5jIChyZXEpID0+IHtcclxuICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBVUkwocmVxLnVybCkuc2VhcmNoUGFyYW1zO1xyXG4gICAgY29uc3QgbG9jYXRpb24gPSBwYXJhbXMuZ2V0KCdsb2NhdGlvbicpO1xyXG5cclxuICAgIGNvbnN0IGFwaWtleSA9ICc3ZWI1N2FmYzEzZWY0MzVhYmFlOTI1MDkyNDI5MTInO1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cDovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9jdXJyZW50Lmpzb24/a2V5PSR7YXBpa2V5fSZxPSR7bG9jYXRpb259JmFxaT1ub2ApO1xyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgIFxyXG4gICAgcmV0dXJuIG5ldyBSZXNwb25zZShKU09OLnN0cmluZ2lmeShkYXRhKSk7XHJcbn0iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7O0FBQUEsSUFBTyxxQkFBUSxPQUFPLFFBQVE7QUFDMUIsUUFBTSxTQUFTLElBQUksSUFBSSxJQUFJLEdBQUcsRUFBRTtBQUNoQyxRQUFNLFdBQVcsT0FBTyxJQUFJLFVBQVU7QUFFdEMsUUFBTSxTQUFTO0FBQ2YsUUFBTSxXQUFXLE1BQU0sTUFBTSxpREFBaUQsTUFBTSxNQUFNLFFBQVEsU0FBUztBQUMzRyxRQUFNLE9BQU8sTUFBTSxTQUFTLEtBQUs7QUFFakMsU0FBTyxJQUFJLFNBQVMsS0FBSyxVQUFVLElBQUksQ0FBQztBQUM1QzsiLAogICJuYW1lcyI6IFtdCn0K
