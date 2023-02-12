using Microsoft.AspNetCore.Components;
using PorcupineHtmlEditor;
using System.Text.Json.Nodes;

namespace PorcupineTest.Pages
{
    public partial class Index
    {
        private PorcupineEditor? _Editor { get; set; }

        private enum TestMode
        {
            CONTENT,
            EDITOR,
            FORMAT,
            SELECTION
        }

        private TestMode _TestMode = TestMode.CONTENT;        
        

        #region Content
        private async Task DeleteText()
        {
            await _Editor!.DeleteText(0, 3);
        }

        private async Task GetLength()
        {
            int length = await _Editor!.GetLength();
        }

        private async Task GetHTML()
        {
            string html = await _Editor!.GetHTML();
        }

        private async Task SetHTML()
        {
            await _Editor!.SetHTML((MarkupString)"<strong>BOLD</strong><em>Italic</em>");
        }

        private async Task GetText()
        {
            string text = await _Editor!.GetText();
        }

        private async Task SetText()
        {
            await _Editor!.SetText("ABCDEFG");
        }

        private async Task InsertImage()
        {
            await _Editor!.InsertImage(0, "https://picsum.photos/536/354");
        }

        private async Task InsertText()
        {
            await _Editor!.InsertText(0, "ABCDEFG");
        }

        #endregion


        #region Editor

        private async Task ShowPorcupine()
        {
            await _Editor!.ShowPorcupine();
        }

        private async Task HidePorcupine()
        {
            await _Editor!.HidePorcupine();
        }

        private async Task ClearFocus()
        {
            await _Editor!.ClearFocus();
        }

        private async Task GrabFocus()
        {
            await _Editor!.GrabFocus();
        }

        private async Task IsFocused()
        {
            bool isFocused = await _Editor!.IsFocused();
        }

        private async Task EnablePorcupine()
        {
            await _Editor!.EnablePorcupine();
        }

        private async Task DisablePorcupine()
        {
            await _Editor!.DisablePorcupine();
        }
        #endregion

        #region Format
        public async Task FormatSelection()
        {
            await _Editor!.FormatSelection("color", "red");
        }

        public async Task FormatText()
        {
            await _Editor!.FormatText(3, 3, "color", "green");
        }

        public async Task ClearFormat()
        {
            await _Editor!.ClearFormat(3, 3);
        }
        #endregion

        #region Selection

        private async Task GetBounds()
        {
            JsonObject bounds = await _Editor!.GetBounds(0, 3);
        }

        private async Task GetSelection()
        {
            JsonObject selection = await _Editor!.GetSelection();
        }

        private async Task SetSelection()
        {
            await _Editor!.SetSelection(3, 3);
        }

        #endregion
    }
}
