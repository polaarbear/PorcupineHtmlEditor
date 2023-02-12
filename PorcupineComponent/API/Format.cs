using Microsoft.JSInterop;

namespace PorcupineHtmlEditor
{
    public partial class PorcupineEditor
    {
        public async Task FormatSelection(string property, string value)
        {
            await _JS!.InvokeVoidAsync("formatPorcupineSelection", new object[] { Id, property, value });
        }

        public async Task FormatText(int index, int length, string property, string value)
        {
            await _JS!.InvokeVoidAsync("formatPorcupineText", new object[] { Id, index, length, property, value });
        }

        public async Task ClearFormat(int index, int length)
        {
            await _JS!.InvokeVoidAsync("clearPorcupineFormat", new object[] { Id, index, length });
        }
    }
}
