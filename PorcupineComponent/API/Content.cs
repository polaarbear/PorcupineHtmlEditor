using Microsoft.AspNetCore.Components;
using Microsoft.JSInterop;

namespace PorcupineHtmlEditor
{
    public partial class PorcupineEditor
    {
        public async Task<int> GetLength()
        {
            return await _JS!.InvokeAsync<int>("getPorcupineLength", Id);
        }

        public async Task<string> GetText()
        {
            return await _JS!.InvokeAsync<string>("getPorcupineText", Id);
        }

        public async Task<string> GetText(int startIndex)
        {
            return await _JS!.InvokeAsync<string>("getPorcupineText", new object[] { Id, startIndex });
        }

        public async Task<string> GetText(int startIndex, int length)
        {
            return await _JS!.InvokeAsync<string>("getPorcupineText", new object[] { Id, startIndex, length });
        }

        public async Task SetText(string text)
        {
            await _JS!.InvokeVoidAsync("setPorcupineText", new object[] { Id, text });
        }

        public async Task<string> GetHTML()
        {
            return await _JS!.InvokeAsync<string>("getPorcupineHTML", Id);
        }

        public async Task SetHTML(string html)
        {
            await _JS!.InvokeVoidAsync("setPorcupineHTML", new object[] { Id, html });
        }

        public async Task SetHTML(MarkupString html)
        {
            await _JS!.InvokeVoidAsync("setPorcupineHTML", new object[] { Id, html.ToString() });
        }

        public async Task DeleteText(int index, int length)
        {
            await _JS!.InvokeVoidAsync("deletePorcupineText", new object[] { Id, index, length });
        }

        public async Task InsertImage(int index, string imageURL)
        {
            await _JS!.InvokeVoidAsync("insertImageToPorcupine", new object[] { Id, index, imageURL });
        }

        public async Task InsertText(int index, string text)
        {
            await _JS!.InvokeVoidAsync("insertTextToPorcupine", new object[] { Id, index, text });
        }
    }
}
