using Microsoft.JSInterop;
using System.Text.Json.Nodes;

namespace PorcupineHtmlEditor
{
    public partial class PorcupineEditor
    {

        public async Task<JsonObject> GetBounds(int index)
        {
            return await _JS!.InvokeAsync<JsonObject>("getBounds", new object[] { Id, index });
        }

        public async Task<JsonObject> GetBounds(int index, int length)
        {
            return await _JS!.InvokeAsync<JsonObject>("getBounds", new object[] { Id, index, length });
        }

        public async Task<JsonObject> GetSelection()
        {
            return await _JS!.InvokeAsync<JsonObject>("getSelection", Id);
        }

        public async Task SetSelection(int index, int length)
        {
            await _JS!.InvokeVoidAsync("setSelection", new object[] { Id, index, length });
        }

    }
}
