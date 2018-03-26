using Microsoft.AspNetCore.Html;
using Microsoft.AspNetCore.Mvc.Rendering;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using Newtonsoft.Json.Serialization;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace NetCoreMvcAngular.Infrastructure
{
    public static class Extensions
    {
		public static IHtmlContent LoadSpaScripts(this IHtmlHelper helper)
		{
			var html =
				File.ReadAllText(System.IO.Path.Combine(Directory.GetCurrentDirectory(), "wwwroot/dist", "index.html"));

			return helper.Raw(html);

		}
		public static string ToJson<T>(this T obj, bool includeNull = true)
		{
			var settings = new JsonSerializerSettings
			{
				ContractResolver = new CamelCasePropertyNamesContractResolver(),
				Converters = new JsonConverter[] { new StringEnumConverter() },
				NullValueHandling = includeNull ? NullValueHandling.Include : NullValueHandling.Ignore
			};
			return JsonConvert.SerializeObject(obj, settings);
		}
		public static IHtmlContent JsonFor<T>(this IHtmlHelper helper, T obj)
		{
			return helper.Raw(obj.ToJson());
		}
	}
}
